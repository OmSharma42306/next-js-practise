const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken')
const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get('/',async(req,res)=>{
    return res.json({msg:"hi"})
})

app.post("/login",async(req,res)=>{
    const email = req.body.email ; 
    const password = req.body.password; 
    const id = 1; 
    const token = jwt.sign({id},"secrteCode");
    
    return res.json({token:token});
});

app.get("/details",auth,async(req,res)=>{
    console.log("Om Sharma");

})

async function auth(req,res,next){
    const token = req.headers.authorization;
    console.log("i am in middleware");
    console.log(token);
    next();
}

app.listen(3000,()=>{console.log("Server Started at : 3000")});