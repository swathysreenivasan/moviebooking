const express= require('express')
const  userModel=require('./models/User')
const bookingModel=require('./models/Bookings')
const app= new express();
const cors=require('cors');
const movieModel = require('./models/Movie');
const jwt=require('jsonwebtoken');
const bcrypt=require('bcrypt');



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

const JWT_SECRET_KEY='your-secret-key';

app.post('/uadd',(req,res)=>{
    const result= new  userModel(req.body)
    result.save();
    res.send("data added")
})
// api to view data from db
app.get('/uview',async(req,res)=>{
    let result = await  userModel.find();
    res.json(result);
})

//Deleting a document 
app.delete('/uremove/:id',async(req,res)=>{
    console.log(req.params);
    let id=req.params.id
    await  userModel.findByIdAndDelete(id);
    res.json({message:'deleted'})
})
//updating a document
app.put('/uupdate/:id',async(req,res)=>{
    console.log(req.params);
    let id=req.params.id
    await  userModel.findByIdAndUpdate(id, req.body)
    res.json({message:'updated'})

})
app.post('/Madd',(req,res)=>{
    const result= new  movieModel(req.body)
    result.save();
    res.send("Movie added")
})



app.get('/Mview',async(req,res)=>{
    let result = await  movieModel.find();
    res.json(result);
})


app.delete('/Mremove/:id',async(req,res)=>{
    console.log(req.params);
    let id=req.params.id
    await  movieModel.findByIdAndDelete(id);
    res.json({message:' movie deleted'})
})

app.post('/userlogin',async(req,res)=>{
    try{
        const {email,password} = req.body;

        //check if the user exists
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(401).json({message:'Invalid username or password'});
        }

        //generate a JWT token
        const token = jwt.sign({userId: user._id},JWT_SECRET_KEY);
        res.json({message:'Login successful', token});
    }catch(error){
        console.error(error.message);
        res.status(500).json({ message: `Internal Server Error - Login: ${error.message}` });
    }
});
//user register
app.post('/register',async(req,res)=>{
    try{
        const {name,email,password,bookings} = req.body;

        //check if the username or email already exists
        const existingUser = await userModel.findOne({$or: [{name},{email}]});
        if(existingUser){
            return res.status(400).json({message:'Username or email already exists'});
        }

        //hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password,10);

        //save the user to the database
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
            bookings
        });
        const savedUser = await newUser.save(); // Save the new user and get the saved document
        
        // generate a JWT token with the saved user's ID
        const token = jwt.sign({ userId: savedUser._id }, JWT_SECRET_KEY);
        res.status(201).json({ message: 'User registered successfully', token });
        
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Internal sarver error'});
    }
});





app.listen(3000,()=>{
    console.log("port 3000 is up and running")
})
app.post('/Badd',(req,res)=>{
    const result= new  bookingModel(req.body)
    result.save();
    res.send("Booking added")
})


app.get('/Bview',async(req,res)=>{
    let result = await  bookingModel.find();
    res.json(result);
})

