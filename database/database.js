const Sequelize = require('sequelize');

const connection = new Sequelize('questions_answers','root','root',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;