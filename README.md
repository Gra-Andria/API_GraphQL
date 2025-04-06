# 📦 API de Gestion des Utilisateurs avec GraphQL

Une API développée en Node.js permettant la gestion d'utilisateurs à l'aide de **GraphQL**.  
Cette application propose les opérations de base **CRUD** :  
Créer, Lire, Mettre à jour et Supprimer des utilisateurs via des requêtes GraphQL.

---

## 🚀 Fonctionnalités

- 🔍 **Lire** : Obtenir la liste de tous les utilisateurs ou un utilisateur par ID.
- ➕ **Créer** : Ajouter un nouvel utilisateur 
- ✏️ **Mettre à jour** : Modifier les informations d’un utilisateur 
- 🗑️ **Supprimer** : Supprimer un utilisateur 

---

## 🧰 Technologies utilisées

- **Node.js**
- **Express.js**
- **GraphQL**
- **Mongoose** (MongoDB)

---

## 📦 Installation

1. **Cloner le dépôt**
   ```bash
   git clone  https://github.com/Gra-Andria/API_GraphQL.git
   cd nom-du-depot
2. Installer les dépendances
3. Lancer le serveur
   
## 🔌 Endpoint GraphQL
L'interface GraphQL est accessible à l'adresse : http://localhost:4000/graphql

## Exemple de Mutation  (Ajout d'un utilisateur)
mutation {
  createUser(name: "Gracia", email: "gracia@example.com", password: "password") {
    id
    name
    email
    password
  }
}

##✍️ Auteur
Développé par Gracia ❤️
