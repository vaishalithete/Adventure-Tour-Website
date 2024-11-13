const express = require("express")
const app = express()
const path = require("path")
const hbs = require("hbs")
const collection = require("./mongodb")
const exp = require("constants")

const templatePath = path.join(__dirname, '../templates')

// CSS
app.use(express.static('public'));


app.use(express.json())
app.set("view engine", "hbs")
app.set("views", templatePath)

app.use(express.urlencoded({extended:false}))

// VISHU
app.get("/", (req, res) => {
    res.render("travel");
});
// const PORT = 3000;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
// });




app.get("/login", (req, res) => {
    res.render("login")
})

// app.get("/", (req, res) => {
//     res.render("login")
// })

app.get("/signup", (req, res) => {
    res.render("signup")
})

app.post("/signup",async (req, res) => {
    const data = {
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        password:req.body.password
    }

    await collection.insertMany([data])

    // res.render("home")
    res.render("travel")
    
})


// app.post("/signup",async (req, res) => {
//     const data = {
//         name:req.body.name,
//         password:req.body.password
//     }

//     await collection.insertMany([data])

//     // res.render("home")
//     res.render("travel")
    
// })


app.post("/login",async (req, res) => {

    try{
        const check = await collection.findOne({name:req.body.name})

        if(check.password===req.body.password){
            // res.render("home")
            res.render("travel")
        }
        else{
            res.send("Wrong Password")
        }
    }
    catch{

        res.send("Wrong Details")
    }    
    
})




app.listen(3000, () => {
    console.log(`port connected`);
})