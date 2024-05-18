const express = require('express');
const router = express.Router();
const controladorProduto = require('../controllers/controladorProduto');
const controladorSupermercado = require('../controllers/controladorSupermercado');
const controladorCarrinhoCompras = require('../controllers/controladorCarrinhoCompras');

// router.post('/carrinhoCompras', controladorCarrinhoCompras.criarCarrinhoCompras);

router.post('/produtos', controladorProduto.criarProduto);
router.get('/produtos', controladorProduto.obterProdutos);
router.get('/produtos/:produtoId', controladorProduto.obterProduto);
router.delete('/produtos', controladorProduto.apagarProduto);
router.put('/produtos', controladorProduto.editProduto);

router.post('/supermercados', controladorSupermercado.criarSupermercado);
router.get('/supermercados', controladorSupermercado.obterSupermercados);
router.get('/supermercados/:supermercadoId', controladorSupermercado.obterSupermercado);
router.get('/supermercados/:supermercadoId/produtos', controladorSupermercado.obterProdutosSupermercados);


module.exports = router;
