import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';



@Injectable()
export class DatabaseProvider {

  constructor(private sqlite: SQLite) {
   
  }

  public getDB() {
    return this.sqlite.create({
      name: 'banco.db',
      location: 'default'
    });
  }



public criarDatabase() {
    return this.getDB()
      .then((db: SQLiteObject) => {
 
        // Criando as tabelas
        this.criarTabelas(db);
 
       
       
      })
      .catch(e => console.log(e));
  }



private criarTabelas(db: SQLiteObject) {
    // Criando as tabelas
    db.sqlBatch([
      ['CREATE TABLE IF NOT EXISTS contas(id integer primary key AUTOINCREMENT NOT NULL, descricao TEXT)'],
      ['CREATE TABLE IF NOT EXISTS lancamentos(id INTEGER PRIMARY KEY AUTOINCREMENT, descricao TEXT, valor REAL, data TEXT, conta TEXT, entradaSaida TEXT, pago TEXT)']

    ])
    .then(() => console.log('Tabelas criadas'))
    .catch(e => console.error('Erro ao criar as tabelas', e));
  }




}
