import * as SQLite from 'expo-sqlite';

export async function getDb() {
  const db = await SQLite.openDatabaseAsync('LojaDatabase.db');
  // Cria tabela se não existir
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS PRODUTO (
      CODIGO INTEGER PRIMARY KEY,
      NOME TEXT NOT NULL,
      QUANTIDADE INTEGER NOT NULL
    );
  `);
  return db;
}