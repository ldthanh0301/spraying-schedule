const sequelize = require("./connectDB");
const { Sequelize, DataTypes, Model  } = require("sequelize");

class Farmer extends Model {}
Farmer.init({
  farmer_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  farmer_address: {
    type: DataTypes.STRING,
  },
  farmer_phone: {
    type: DataTypes.STRING,
  },
  farmer_name: {
    type: DataTypes.STRING,
  },
},{
    sequelize,
    modelName: "farmer"
});


// (async () => {
//   await Farmer.sync();
//   // Code here
// })();

module.exports = Farmer;
