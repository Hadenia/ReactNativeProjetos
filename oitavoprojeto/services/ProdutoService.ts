import { Produto } from '../models/Produto';
import { getDb } from '../db/database';

export async function listarProdutos(): Promise<Produto[]> {    
    const db = await getDb();
    const result = await db.getAllAsync<{
        CODIGO: number; NOME: string; QUANTIDADE: number;
    }>('SELECT CODIGO, NOME, QUANTIDADE FROM PRODUTO ORDER BY CODIGO ASC;');

    return result.map(r => ({
        codigo: r.CODIGO,
        nome: r.NOME,
        quantidade: r.QUANTIDADE,
    }));
}

export async function adicionarProduto(p: Produto): Promise<void> {
    if (!p || Number.isNaN(p.codigo) || !p.nome?.trim() || Number.isNaN(p.quantidade)) {
        throw new Error('Dados inválidos do produto.');
    }
    const db = await getDb();
    await db.runAsync(
        'INSERT INTO PRODUTO (CODIGO, NOME, QUANTIDADE) VALUES (?, ?, ?);',
        [p.codigo, p.nome.trim(), p.quantidade]
    );
}

export async function removerProduto(codigo: number): Promise<void> {
    const db = await getDb();
    await db.runAsync('DELETE FROM PRODUTO WHERE CODIGO = ?;', [codigo]);
}

export async function obterProduto(codigo: number): Promise<Produto | null> {
    const db = await getDb();
    const row = await db.getFirstAsync<{ CODIGO: number; NOME: string; QUANTIDADE: number }>(
        'SELECT CODIGO, NOME, QUANTIDADE FROM PRODUTO WHERE CODIGO = ?;',
        [codigo]
    );
    if (!row) return null;
    return { codigo: row.CODIGO, nome: row.NOME, quantidade: row.QUANTIDADE };
}

export async function atualizarProduto(p: Produto): Promise<void> {
    const db = await getDb();
    await db.runAsync(
        'UPDATE PRODUTO SET NOME = ?, QUANTIDADE = ? WHERE CODIGO = ?;',
        [p.nome.trim(), p.quantidade, p.codigo]
    );
}
