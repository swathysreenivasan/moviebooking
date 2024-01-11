const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://swathy:swathy@cluster0.woltfqb.mongodb.net/MovieDB?retryWrites=true&w=majority")

.then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
})
var movieschema= mongoose.Schema;
var movieschema= new movieschema({
  title: String,
  description: String,
  actors: String,
  imageurl:String
})
let movieModel = mongoose.model("Movie",movieschema);
module.exports= movieModel;





