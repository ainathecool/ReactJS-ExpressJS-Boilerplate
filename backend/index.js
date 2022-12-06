/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

const express = require('express');
const cors = require('cors'); //used for domain
const mongoose = require('mongoose');

require('dotenv').config(); //
const app = express();

//if env file ma port = 8000 dya wa tou idhar aesay port define
const port = process.env.PORT || 8000; //address 
//process.env.port means jo ismay port parra wa tou use this or 8000
//filhaal process.env.port ma humnay 8000 he rakha wa
//otherwise we can just do const port = 8000; if not defined in env file



//coneecting app w db
const uri = process.env.ATLAS_URI; //atlasturi is connection string
mongoose.connect(uri, {useNewUrlParser:true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to db");
})

app.use(cors());
app.use(express.json());

//const CustomerRouter = require('./routes/customer');
const AdminRouter = require('./routes/admin');

//app.use('/customer', CustomerRouter);
app.use('/admin', AdminRouter); //localhost/3000/admin/and agay whatever fucntion eg add

app.listen(port, () => { //tells us kis port pa app chal rhi hai
    console.log(`Server is running on port: ${port}`);
});






