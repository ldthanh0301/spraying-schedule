const sequelize = require("./connectDB");
const { Sequelize, DataTypes, Model  } = require("sequelize");

class SprayingSchedule extends Model {}

SprayingSchedule.init({
  spraying_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  spraying_note: {
    type: DataTypes.TEXT,
  },
  spraying_date: {
    type: DataTypes.DATE,
  },
  spraying_name: {
    type: DataTypes.STRING,
  },
},{
    sequelize,
    modelName: "spraying-schedule"
});


// (async () => {
//   await SprayingSchedule.sync();
//   // Code here
// })();

module.exports = SprayingSchedule;
