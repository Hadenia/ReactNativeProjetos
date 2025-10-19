var express = require('express');
var router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const docs = await global.db.findAll();
    let valores = docs.map((item) => ({
      codigo: item._id,
      nome: item.nome,
      quantidade: item.quantidade
    }));
    res.send(valores);
  } catch (err) {
    res.send({ resultado: 'Erro ao Listar', mensagem: err });
  }
})

router.post('/new', async (req, res, next) => {
  try {
    const result = await global.db.insert(req.body);
    res.send({ resultado: 'Inserido' });
  } catch (err) {
    res.send({ resultado: 'Erro ao Inserir', mensagem: err });
  }
})

router.delete('/remove/:codigo', async (req, res, next) => {
  const codigo = parseInt(req.params.codigo);
  
  try {

    const produtos = await global.db.findAll();
    const produtoExiste = produtos.some(produto => produto._id === codigo);
    
    if (!produtoExiste) {
      return res.status(404).send({ 
        resultado: 'Erro', 
        mensagem: `Produto com código ${codigo} não encontrado` 
      });
    }

    const result = await global.db.deleteOne(codigo);
    res.send({ 
      resultado: 'Removido',
      mensagem: `Produto ${codigo} removido com sucesso`
    });

  } catch (err) {
    res.send({ resultado: 'Erro ao Remover', mensagem: err.message });
  }
})

module.exports = router;
