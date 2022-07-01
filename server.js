require('dotenv').config();//access the vars in .env file that wont be avail on github for security purposes
const express = require('express')
const mongoose = require("mongoose")
const PORT = process.env.PORT || 3000;
const app = express();
const routes = require("./routes")

mongoose.connect(process.env.DATABASE_URL)
//using middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
})
app.use(express.urlencoded({extended:true}))


//routes go below...
app.use("/api",routes); //using the routes from the routes folder making this file alot cleaner

//app listening on port
app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT} by ${process.env.testVar}`) 
})