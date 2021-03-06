import { Router } from "express";
const router = Router();
import { db } from "../database/createConnection.js";

// Get all bikes
router.get("/", async (req, res) => {
    const bikes = await db.all("SELECT * FROM bikes;");
    res.send({ data: bikes });
});

// Get bike after discipline e.g race, mtb, city
router.get("/discipline", async (req, res) => {
    const discipline = req.query.discipline;
    const bike = await db.all("SELECT * FROM bikes WHERE discipline = ?", [discipline]);
    res.send({ data: bike });
})

// Get bike after id
router.get("/:id", async (req, res) => {
    const id = req.params.id;
    const findBikeById = await db.all("SELECT * FROM bikes WHERE id = ?", [id]);
    res.send({ data: findBikeById });
})

// Enter new bike
router.post("/", async (req, res) => {
    const { brand, model, discipline, price, stock, description, image, isFavorite } = req.body;
    const { changes } = await db.run("INSERT INTO bikes (brand, model, discipline, price, stock, description, image, isFavorite) VALUES(?, ?, ?, ?, ?, ?, ?, ?);",
    [brand || "Missing brand", model || "Missing model", discipline || "Missing discipline", price || "Missing price", stock || "Missing inventory", description || "Missing description", image || "Missing image", isFavorite ?? "Favorite should be set to false"]);
    res.send({ rowsAffected: changes });
});

// Edit bike(PUT)
router.put("/:id", async (req, res) => {
    const id = req.params.id
    const { brand, model, discipline, price, stock, description, image, isFavorite } = req.body;
    const { changes } = await db.run("UPDATE bikes SET brand = ?, model = ?, discipline = ?, price = ?, stock = ?, description = ?, image = ?, isFavorite = ? WHERE id = ?;",
    [brand , model, discipline, price, stock,description, image, isFavorite, id]);
    res.send({ rowsAffected: changes });
});

// Edit bike(PATCH) for favorite button/badge
router.patch("/:id", async (req, res) => {
    const id = req.params.id;
    const { isFavorite } = req.body
    const { changes } = await db.run("UPDATE bikes SET isFavorite = ? WHERE id = ?;",
    [isFavorite, id]);
    res.send({ rowsAffected: changes });    
})

// Delete bike
router.delete("/:id", async (req, res) => {
    const id = req.params.id
    const { changes } = await db.run("DELETE FROM bikes WHERE ID = " + id +";");
    res.send({ rowsAffected: changes });
})

export default router;