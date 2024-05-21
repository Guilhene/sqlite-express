const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Supermercado = require('./modeloSupermercado')

const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estoque: {
    type: DataTypes.NUMBER,
    allowNull:false,
  },
  tamanho: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
Supermercado.hasMany(Produto);
Produto.belongsTo(Supermercado);


module.exports = Produto;
