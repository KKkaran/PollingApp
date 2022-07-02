const mongoose = require("mongoose")

const User = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required:true
    },
    choice: {
        type: Number,
        required:true
    },
    


})