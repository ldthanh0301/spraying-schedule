const sequelize = require("./connectDB");
const { Sequelize, DataTypes, Model  } = require("sequelize");


class Pesticide extends Model {}
Pesticide.init({
  pesticide_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  pesticide_name: {
    type: DataTypes.STRING,
  },
  pesticide_description: {
    type: DataTypes.STRING,
  },
},{
    sequelize,
    modelName: "pesticide"
});


// (async () => {
//   await Pesticide.sync();
//   // Code here
// })();

module.exports = Pesticide;
