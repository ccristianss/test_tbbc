const express = require("express");
const router = express.Router();
const { Favorites, sequelize } = require("../models");

router.post("/", async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const { name, lat, long, country } = req.body;
  const userId = req.user.id;

  console.log({ name, lat, long, country, userId });

  try {
    const favorite = await Favorites.create({
      name,
      lat,
      long,
      country,
      userId,
    });
    res.json(favorite);
  } catch (error) {
    console.error('Error saving city to database:', error);
    res.status(500).json({ error: "Error saving city to database" });
  }
});

router.get("/", async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const userId = req.user.id;

  try {
    const favorites = await Favorites.findAll({
      where: { userId }
    });
    res.json(favorites);
  } catch (error) {
    console.error('Error retrieving favorites:', error);
    res.status(500).json({ error: "Error retrieving favorites from database" });
  }
});



router.delete("/:id", async (req, res) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    await Favorites.destroy({ where: { id: req.params.id } });
    res.json({ message: "City removed from favorites" });
  } catch (error) {
    res.status(500).json({ error: "Error removing city from database" });
  }
});

module.exports = router;
