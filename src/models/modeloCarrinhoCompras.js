const { DataTypes } = require('sequelize');
const sequelize = require('../config/dbConfig');
const Produto = require('./modeloProduto');

const CarrinhoCompras = sequelize.define('CarrinhoCompras', {
    quantidadePedidos:{
        type: DataTypes.NUMBER,
        allowNull: false,
    },
});

Produto.hasMany(CarrinhoCompras);
CarrinhoCompras.belongsTo(Produto);

module.exports = CarrinhoCompras;
