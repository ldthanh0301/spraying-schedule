const  sequelize = require("./connectDB");
const {Sequelize, DataTypes, Model} = require("sequelize");

class Account extends Model{}
 Account.init({
    username:{
      type: DataTypes.STRING ,
      primaryKey: true
    },
    password: DataTypes.STRING,
  },
  {
    sequelize,
    modelName:"account"
  }
  );
  
// (async () => {
//   await Account.sync();
//   // Code here
// })();


module.exports = Account;