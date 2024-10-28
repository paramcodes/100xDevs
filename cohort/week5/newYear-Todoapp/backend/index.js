const express = require('express');
const {createTodo,completed} = require('./types');
const {Todo} = require("./db");
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

app.post('/todo', async (req, res) => {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){res.status(411).json({msg: 'You sent the wrong inputs'});return;}
    // createTodo.parse({
    //     title: req.body.title,
    //     description: req.body.description
    // })
    const todo = new Todo({
        title:createPayload.title,
        description:createPayload.description,
        completed:false
    })
    await todo.save();
    res.json({msg:"Todo Created"});
})

app.get('/todos', async (req, res) => {
    const todos = await Todo.find({});
    res.json({todos});
})

app.put('/completed', async (req, res) => {
    // completed.parse(req.body.completed);
    const completionPayload = req.body;
    const parsedPayload = completed.safeParse(completionPayload);
    if(!parsedPayload.success){
        res.status(411).json({msg: 'You sent the wrong inputs'});return;
    }
    await Todo.update({_id:completionPayload._id},{completed:!completionPayload.completed});
    res.json({msg:"Todo Updated"});
})

app.listen(process.env.PORT || 3000,()=>console.log(`App is running on port ${3000}`));