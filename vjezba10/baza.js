const Sequelize = require("sequelize");

const sequelize = new Sequelize("vjezba", "root", "password", {
    host: "127.0.0.1",
    dialect: "mysql",
});

module.exports = sequelize;
