const mongoose  = require('mongoose');

const db = async()=> {
    try{
        await mongoose.connect("mongodb+srv://sparamveer1001:MWGdwaFCJJhGLUUf@cluster0.qz7bj.mongodb.net/paytm")
        console.log("db connected");
    }catch (e){
        console.error("Connection failed!",e);
    }
}

const UserSchema = new mongoose.Schema({
    firstname:{
        type:String,
        require:true
    },
    lastname:{
      type:String,
      required:true
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type:String,
        required:true
    }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;