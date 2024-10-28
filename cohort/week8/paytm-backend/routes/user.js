const express = require('express');
const zod = require('zod');
const {User} = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require("../config");


const router = express.Router();

const signupSchema = zod.object({
    username:zod.string().email(),
    password:zod.string().min(8),
    firstname:zod.string().max(25),
    lastname:zod.string().max(20)
})
router.post('/signup',  async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const success = signupSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            msg:"Email already taken/Incorrect inputs"
        })
    }

    const user = User.findOne({ username:username });
    if(user._id){
        return res.status(411).json({
            msg:"Email already taken/Incorrect inputs"
        })
    }

    const dbUser = await User.create(req.body);
    const token = jwt.sign({userId:dbUser._id},JWT_SECRET,{expiresIn: '7D'});
    res.json({
        message:"User created successfully",
        token:token
    })
})

router.post('/signin',(req,res)=>{

})

router.put('/update',(req,res)=>{

})

module.exports = router;