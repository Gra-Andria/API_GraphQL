const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/User');

const app = express();
app.use(cors());

//Connexion à la base de données
mongoose.connect('mongodb://localhost:27017/api_graphql');

mongoose.connection.once('open', () => {
    console.log('Connecté à MongoDB');
});

//Définition du schema graphql
const schema = buildSchema(`
    type User{
        id: ID!
        name: String!
        email: String!
        password: String!
    }

    input UserInput{
        name: String!
        email: String!
        password: String!
    }
    
    type Query {
        getUser(id: ID!): User
        getUsers: [User]
    }

    type Mutation {
        createUser(input: UserInput): User
        updateUser(id: ID!, input: UserInput): User
        deleteUser(id: ID!): User
    }
    `);

//definition des resolveurs
const root = {
    getUser: async ({ id }) => {
        return await User.findById(id);
    },
    getUsers: async () => {
        return await User.find({});
    },

    //Mutation
    createUser: async ({ input }) => {
        const user = new User(input);
        await user.save();
        return user;
    },
    updateUser: async ({ id, input }) => {
        return await User.findByIdAndUpdate(id, input, { new: true });
    },
    deleteUser: async ({ id }) => {
        return await User.findByIdAndDelete(id);
    }
};

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}/graphql`);
});
