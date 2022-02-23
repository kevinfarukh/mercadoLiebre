const express = require("express");

const app = express();
const path = require("path")

app.use(express.static(path.resolve(__dirname,"./public")))


app.get("/",(req,res)=>{
    res.sendFile(path.resolve("./views/home.html"))
})

app.get("/register",(req,res)=>{
    res.sendFile(path.resolve("./views/register.html"))
})
app.post("/",(req,res)=>{
    res.sendFile(path.resolve("./views/home.html"))
})

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve("./views/login.html"))
})
app.post("/",(req,res)=>{
    res.sendFile(path.resolve("./views/home.html"))
})
app.listen(process.env.PORT || 3010, ()=>{
    console.log("servidor corriendo en el puerto 3010") 
})