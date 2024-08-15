const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("weatherapp", "backendApp", "P4$$backendApp", {
  host: "localhost",
  dialect: "mysql",
});

const Favorites = sequelize.define("Favorites", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
},
name: {
    type: Sequelize.STRING,
    allowNull: false,
},
lat: {
    type: Sequelize.FLOAT,
    allowNull: false,
},
long: {
    type: Sequelize.FLOAT,
    allowNull: false,
},
country: {
    type: Sequelize.STRING,
    allowNull: false,
},
userId: {
    type: Sequelize.STRING,
    allowNull: false,
},
});


sequelize.sync().then(() => {
  console.log("Database & tables created!");
});

sequelize.sync({ alter: true });

module.exports = {
  Favorites, sequelize
};
