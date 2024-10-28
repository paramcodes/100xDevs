const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(6);

function signJwt(username,password){
    const usernameRes = emailSchema.safeParse(username);
    const passwordRes = passwordSchema.safeParse(password);
    if(!usernameRes.success || !passwordRes.success)return null;
    const signature = jwt.sign({username},jwtPassword);
    return signature;
}

const ans = signJwt('something@wow.com','423424224');
console.log(ans);

function verifyJwt(token){
    try{
        const verify = jwt.verify(token, jwtPassword);
        return true;
    }catch(err){
        console.log(err.message);
        return false;
    }
}

const ver = verifyJwt(ans);
console.log(ver);

function decodeJwt(token){
    const decoded = jwt.decode(token);
    return decoded;
}

const dec = decodeJwt(ans);
console.log(dec);