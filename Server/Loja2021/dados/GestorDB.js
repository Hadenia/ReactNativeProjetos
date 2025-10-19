// const mongoClient = require('mongodb').MongoClient;

//  mongoClient.connect('mongodb://localhost:27017',
//                     {useUnifiedTopology: true})
//              .then(conn => global.conn = conn.db('loja'))
//              .catch(err => console.log(err))

//  function findAll() {
//      return global.conn.collection('produtos').find().toArray();
//  }

//  function insert(produto) {
//      return global.conn.collection('produtos')
//                        .insertOne(produto);
//  }

//  function deleteOne(codigo) {
//      return global.conn.collection('produtos')
//                        .deleteOne({ _id: codigo });
//  }

//  module.exports = { findAll, insert, deleteOne }

const { MongoClient } = require('mongodb');

const uri = "mongodb://localhost:27017";
const dbName = "loja";

let singleton;

async function connect() {
    if (singleton) return singleton;

    try {
        console.log('Tentando conectar ao MongoDB...');
        const client = new MongoClient(uri);
        await client.connect();
        console.log('Conectado com sucesso ao MongoDB!');

        singleton = client.db(dbName);
        return singleton;
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        throw error;
    }
}

async function findAll() {
     try {
        const db = await connect();
        const produtos = await db.collection("produtos").find().toArray();
        console.log('Produtos encontrados:', produtos);
        return produtos;
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        throw error;
    }
}

async function insert(produto) {
     try {
        const db = await connect();

        console.log('Tentando inserir:', produto);

        if (!produto.codigo || !produto.nome || produto.quantidade === undefined) {
            throw new Error('Campos obrigatórios faltando');
        }

       const produtoFormatado = {
            _id: parseInt(produto.codigo),
            nome: String(produto.nome),
            quantidade: parseInt(produto.quantidade)
        };

        const result = await db.collection("produtos").insertOne(produtoFormatado);
        console.log('Produto inserido:', result);
        return result;
    } catch (error) {
        console.error('Erro ao inserir produto:', error);
        throw error;
    }
}

async function deleteOne(codigo) {
     try {
        const db = await connect();
        const result = await db.collection("produtos").deleteOne({ _id: codigo });
        console.log('Produto removido:', result);
        return result;
    } catch (error) {
        console.error('Erro ao remover produto:', error);
        throw error;
    }
}

module.exports = { findAll, insert, deleteOne }