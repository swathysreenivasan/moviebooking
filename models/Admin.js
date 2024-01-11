const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://swathy:swathy@cluster0.woltfqb.mongodb.net/MovieDB?retryWrites=true&w=majority")

.then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
})
var adminschema= mongoose.Schema;
var adminschema= new adminschema({
  email:  String,
  password: String,
  addedmovies: mongoose.Types.ObjectId
})
let adminModel = mongoose.model("Admin",adminschema);
module.exports= adminModel;





