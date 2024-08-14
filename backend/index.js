const express = require("express");
const passport = require("passport");
require("dotenv").config();

const sessionConfig = require("./config/session");
const passportConfig = require("./config/passport");
const authRoutes = require("./routes/auth");
const weatherRoutes = require("./routes/weather");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(sessionConfig);
app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);
app.use("/weather", weatherRoutes);

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
