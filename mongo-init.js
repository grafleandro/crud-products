db = db.getSiblingDB('admin');

// Crie um usuário com as permissões necessárias
db.createUser({
  user: "lms",
  pwd: "lms123",
  roles: [
    {
      role: "readWrite",
      db: "crud"
    }
  ]
});

// banco de dados do projeto
db = db.getSiblingDB('crud');

// Criando a coleção do produtos
db.createCollection('products');