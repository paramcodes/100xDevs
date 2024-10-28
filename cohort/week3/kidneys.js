const express = require('express');
const zod = require('zod');
const schema = zod.array(zod.number());
const schema2 = zod.object({
    name: zod.string(),
    password: zod.string().min(8),
    country: zod.literal('IN').or(zod.literal('US')),
})

const app = express();

app.use(express.json());

app.post('/health-checkup', (req, res) => {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    res.send(response);
    // if(!kidneys){
    //     res.json({
    //         msg:"wrong inputs"
    //     });
    // }else {
    //     const kidneyLength = kidneys.length;
    //     res.send(`Your kidney Length is ${kidneyLength}`);
    // }
});

// app.use((req,res,next,err)=>{
//     res.json({
//         msg:"Sorry something is up with our servers"
//     })
// })

app.listen(3000);