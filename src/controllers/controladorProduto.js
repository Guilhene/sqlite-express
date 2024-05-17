const Produto = require('../models/modeloProduto');
const Supermercado = require('../models/modeloSupermercado')

const criarProduto = async (req, res) => {
  try {
    const idSupermercado = req.body.idSupermercado;
    const { nome, preco, descricao, estoque, genero } = req.body;

    if (!idSupermercado) throw new Error('ID do supermercado é obrigatório');

    const supermercado = await Supermercado.findByPk(idSupermercado);
    if (!supermercado) throw new Error('Supermercado não encontrado');

    const novoProduto = await Produto.create({ nome, preco, descricao, estoque, genero, SupermercadoId: idSupermercado });

    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const apagarProduto = async (req, res) => {
  try {
    const idPproduto = req.body.idPproduto;
    console.log("error", req.body);
    if (!idPproduto) throw new Error('ID do produto é obrigatório');

    const produto = await Produto.findByPk(idPproduto);
    if (!produto) throw new Error('Produto não encontrado');

    produto.destroy({ 
      where: {
        id : idPproduto, }
      });

    res.status(201).json(produto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const editProduto = async (req, res) => {
  try{
    const { idPproduto, novoNome, novoPreco, novoDescricao, novoEstoque, novoGenero } = req.body;
    if(!idPproduto && !novoNome && !novoPreco && !novoDescricao && !novoEstoque && !novoGenero)throw new Error("Os campos estam vazio");

    const produto = await Produto.findByPk(idPproduto);
    if(!produto) throw new Error("Produto nao encontrado");

    produto.update({
      nome: novoNome || produto.nome,
      preco: novoPreco || produto.preco,
      descricao: novoDescricao || produto.descricao,
      estoque: novoEstoque || produto.estoque,
      genero: novoGenero || produto.genero
    });

    res.status(201).json(produto);
  }catch (error){
    res.status(400).json({ error: error.message});
  }
}

const obterProduto = async (req, res) => {
  try {
    const idPproduto = req.params.produtoId;

    if (!idPproduto) throw new Error('ID do produto é obrigatório');

    const produto = await Produto.findByPk(idPproduto);
    res.json(produto);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const obterProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { criarProduto , obterProdutos, obterProduto, apagarProduto, editProduto}