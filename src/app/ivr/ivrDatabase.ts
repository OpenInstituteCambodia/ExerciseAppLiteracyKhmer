import { Injectable } from '@angular/core';
import * as PouchDB from 'pouchdb';

@Injectable()
export class ivrDatabase {
  private _db;
  private _birthdays;

  constructor() {

  }

  initDB() {
      this._db = new PouchDB('birthday2', { adapter: 'websql' });
  }

}
