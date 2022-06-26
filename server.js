require('dotenv').config();//access the vars in .env file that wont be avail on github for security purposes
const express = require('express')
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.json({"creator": process.env.testVar})
})

app.get("/polling", (req, res) => {
    res.send("<h2>Karan Sodhi is creating the form page</h2>")
})


app.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT} by ${process.env.testVar}`) 
})