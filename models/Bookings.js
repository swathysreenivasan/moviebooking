const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://swathy:swathy@cluster0.woltfqb.mongodb.net/MovieDB?retryWrites=true&w=majority")

.then(()=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
})
var bookingchema= mongoose.Schema;
var bookingchema= new bookingchema({
  movie: mongoose.Types.ObjectId,
  date: Date,
  seatNumber:Number,
  user: mongoose.Types.ObjectId
})
let bookingModel = mongoose.model("Bookings",bookingchema);
module.exports=bookingModel;





