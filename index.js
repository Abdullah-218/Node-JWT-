const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();
const PORT = 5050;
const secretKey = "secretkey";

app.get('/', (req, res) => {
  res.json({
    message: "A sample API"
  })
})

app.post('/login',(req,res)=>{
    const user = {
        id: 1,
        username: "anil",
        email: "test@gmail.com"
    }

    jwt.sign(user, secretKey, { expiresIn: '300s' }, (err, token) => {
        res.json({
            token
        })
    })
})

app.post('/profile',verifyToken,(req,res)=>{
    jwt.verify(req.token,secretKey,(err,authData)=>{
        if(err){
            res.send({result: "Error while accessing Token"})
        }else{
            res.json({message: "Profile assess granted", authData})
        }
    })
})
function verifyToken(req,res,next){
    const bearerHeader = req.headers['authorization'];

    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ")
        const token = bearer[1]
        req.token = token
        next()
    }else{
        res.send({
            result: 'Invalid Token'
        })
    }
}

app.listen(PORT, () => {
  console.log(`App is running on ${PORT} port`);
});