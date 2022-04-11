import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export const db = await open({
    filename: 'bike_shop.db',
    driver: sqlite3.Database
});

