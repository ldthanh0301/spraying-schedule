const sequelize = require("./connectDB");
const Account = require("./Account");
const Farmer = require("./Farmer");
const Field = require("./Field");
const Pesticide = require("./Pesticide");
const SprayingSchedule = require("./SprayingSchedule");
const DetailSpraying = require("./DetailSpraying");

Farmer.belongsTo(Account, {
  foreignKey: "farmer_username",
});

Field.belongsTo(Farmer, {
  foreignKey: "field_farmer",
});

SprayingSchedule.belongsTo(Farmer, {
  foreignKey: "spraying_farmer",
});

SprayingSchedule.belongsTo(Field, {
  foreignKey: "spraying_field",
});

SprayingSchedule.belongsToMany(Pesticide, { through: DetailSpraying, 
    unique: false,
    foreignKey: "spraying_id",
});
Pesticide.belongsToMany(SprayingSchedule, { through: DetailSpraying, 
    unique: false,    
    foreignKey: "desticide_id",
});

sequelize.sync({ force: false }).then(function () {
  console.log("Database Configured");
});
module.exports = { Account, Farmer };
