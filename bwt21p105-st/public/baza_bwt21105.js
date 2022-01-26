const sequelize = require('sequelize');
const napraviModele = require('./modeli');

const baza = new sequelize('bwt21105', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false,
});

napraviModele(baza);

module.exports = baza;
