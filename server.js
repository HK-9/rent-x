const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const dbconnection = require('./db')
app.use(express.json())

app.get('/' , (req , res)=>{

   res.send('hello from simple server :)')

})

app.use('/api/cars', require('./routes/carsRoute'));
app.use('/api/users', require('./routes/usersRoute'));
app.listen(port,() => console.log(`Node js server started in ${port}`));