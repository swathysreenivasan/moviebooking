const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://swathy:swathy@cluster0.woltfqb.mongodb.net/MovieDB?retryWrites=true&w=majority")

.then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
})
var userschema= mongoose.Schema;
var userschema= new userschema({
  name: String,
  email:  String,
  password: String,
  bookings: mongoose.Types.ObjectId
})
let userModel = mongoose.model("User",userschema);
module.exports= userModel;





