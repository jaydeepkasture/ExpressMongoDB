const mongoose = require("mongoose");
const dbConfig = require("../config/db.config.js");
console.log("Connecting to db")
try {
   console.log("HERE")
  var connection = mongoose.createPool({
    host: dbConfig.HOST,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB
  })
 connection.getConnection((err,con)=>{
   let vinit="vinit"
    // console.log(err)
    connection.query(`SELECT * FROM test`, (err, rows) => {
      if (err) {
        console.log("error: ", err);
        return;
      }
      rows.forEach(element => {
        console.log("yo",element.ID)
        
      });
  })
})
  globalThis.ar=1;
} catch (error) {
  console.log(erro)
}

module.exports = connection;
