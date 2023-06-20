const sequelize = require("./connectDB");
const { Sequelize, DataTypes, Model  } = require("sequelize");


class Field extends Model {}
Field.init({
  field_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  field_address: {
    type: DataTypes.STRING,
  },
  field_name: {
    type: DataTypes.STRING,
  },
},{
    sequelize,
    modelName: "field"
});


// (async () => {
//   await Field.sync();
//   // Code here
// })();

module.exports = Field;
