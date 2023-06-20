const sequelize = require("./connectDB");
const { Sequelize, DataTypes, Model  } = require("sequelize");


class DetailSpraying extends Model {}
DetailSpraying.init({
  detail_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
},{
  sequelize,
  modelName: "detail-spraying",
  timestamps: false,       
});


// (async () => {
//   await Field.sync();
//   // Code here
// })();

module.exports = DetailSpraying;
