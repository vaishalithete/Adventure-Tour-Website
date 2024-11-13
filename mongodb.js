const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/UserRegistration")
.then( () => {
    console.log("mongodb connected");
})
.catch( () => {
    console.log("failed to connect");
})


// const LogInSchema = new mongoose.Schema({
//     name:{
//         type:String,
//         required:true
//     },

//     password:{
//         type:String,
//         required:true
//     }
// })


const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true
    },

    number:{
        type:String,
        required:true
    },

    password:{
        type:String,
        required:true
    }
})


const collection = new mongoose.model("LogInCollection", LogInSchema)

module.exports = collection