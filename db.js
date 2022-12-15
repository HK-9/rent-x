const mongoose = require('mongoose');

function connectDB(){

    mongoose.connect("mongodb+srv://hari:3OLMyXqB7gpm9vdQ@cluster0.8h0mgpw.mongodb.net/rent'x", {useUnifiedTopology:true,useNewUrlParser:true})

    const connection = mongoose.connection
    
    connection.on('connected',() => {
        console.log('Mongo DB connection successfull');
    })

    connection.on('failed',() => {
        console.log('Mongo DB connection Error');
    })
    
}
connectDB();

module.exports = mongoose;