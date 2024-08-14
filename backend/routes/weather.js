const express = require("express");
const axios = require('axios');
const router = express.Router();

router.get("/:city", async (req, res) => {
  const { city } = req.params;
  const api = process.env.API_CLIMA;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({
        error: error.response.data.message,
      });
    } else {
      res.status(500).json({
        error: "Error retriveing weather data",
      });
    }
  }
});

module.exports = router;
