const { Router, raw} = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin} = require("../../courseDB/db");
const jwt = require("jsonwebtoken");
const router = Router();

// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    await Admin.create({
        username:username,
        password:password
    })
    res.json({
        message:"Admin created successfully"
    })
});

router.post('/signin',async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.find({
        username:username,
        password:password
    })
    if(user){
        const token = jwt.sign({username:username},JWT_SECRET);
        res.json({
            token
        })
    }else{
        res.status(411).json({
            message:"Incorrect credentials entered"
        })
    }

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;