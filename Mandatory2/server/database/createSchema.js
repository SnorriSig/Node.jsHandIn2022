import { db } from "./createConnection.js";

const deleteMode = true;

if (deleteMode) {
    db.exec("DROP TABLE IF EXISTS bikes;");
}

db.exec(`CREATE TABLE IF NOT EXISTS bikes (
    id INTEGER PRIMARY KEY,
    brand TEXT,
    model TEXT,
    discipline TEXT,
    price INTEGER,
    stock INTEGER
);`);

// Seed my database
if (deleteMode) {
    db.run(`INSERT INTO bikes (brand, model, discipline, price, stock) VALUES ('Cannondale', 'SuperSix', 'race', 25000, 10)`);
    db.run(`INSERT INTO bikes (brand, model, discipline, price, stock) VALUES ('Santa Cruz', 'Cruz', 'mtb', 32000, 8)`);
    db.run(`INSERT INTO bikes (brand, model, discipline, price, stock) VALUES ('Raleigh', 'CRUZER', 'city', 6000, 15)`);
}

db.close();
