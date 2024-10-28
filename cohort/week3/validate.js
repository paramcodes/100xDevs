const zod = require("zod");
function validateInput(arr) {
    const schema = zod.array(zod.number());
    const response = schema.safeParse(arr);
    console.log(response);
    // if(typeof arr === 'object' && arr.length > 0){
    //     if(typeof arr[0] === 'string')return true;
    // }
    // return false;
}
validateInput([1,2,3,4,5]);

const schema = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8),
})