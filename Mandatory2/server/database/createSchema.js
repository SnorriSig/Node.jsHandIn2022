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
    stock INTEGER,
    description TEXT,
    image TEXT,
    isFavorite INTEGER
);`);

// Seed my database
if (deleteMode) {
    db.run(`INSERT INTO bikes (brand, model, discipline, price, stock, description, image, isFavorite) VALUES ('Cannondale', 'SuperSix EVO HI-MOD DISK DURA-ACE Di2', 'race', 25000, 10, 'Fast, just got faster. A pure road bike. Light, smooth and ultra fast. The evolution of the classic race machine.', 'https://embed.widencdn.net/img/dorelrl/2qhqqcfus0/700px@1x/C21_C11101U_SuperSix_EVO_HM_Disc_DA_Di2_GMG_PD.png', 0)`);
    db.run(`INSERT INTO bikes (brand, model, discipline, price, stock, description, image, isFavorite) VALUES ('Scott', 'SPARK 900 ULTIMATE', 'mtb', 32000, 8, 'When you think of the perfect mountain bike, what comes to mind? For us, its the all new Spark 900 Ultimate EVO AXS.', 'https://pictures.ssg-service.com/286/286267_1806740_png_zoom_1.jpg', 0)`);
    db.run(`INSERT INTO bikes (brand, model, discipline, price, stock, description, image, isFavorite) VALUES ('Priority', '600', 'city', 1000, 15, 'Our automotive inspired all-road model with a Pinion 600% gear range, designed to be a performance daily commuter.', 'https://cdn.shopify.com/s/files/1/1245/1481/products/main_600_1024x1024.jpg?v=1650047161', 0)`);
    db.run(`INSERT INTO bikes (brand, model, discipline, price, stock, description, image, isFavorite) VALUES ('Kalkhoff', 'ENTICE 5.B ADVANCE+', 'electric', 4199, 15, 'The Kalkhoff Entice 5.8 Advance+ is a crossover bike, a trekking bike with mountain bike genes.', 'https://cloudinary.pondigital.solutions/pon-digital-solutions/image/upload/q_auto,f_auto/dmp.pon.bike/1280_MM8KPmx49GN2.png', 0)`);
}

db.close();
