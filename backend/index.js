const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express()
const port = 3000;

app.use(express.json());

app.post("/todo", (req, res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);
    if(!parsePayload.success){
      res.status(411).json({
        msg: "You sent the wrong inputs"
      });
      return;
    }

    // put it in mongodb
});


app.get("/todos", (req, res) => {
    res.send()
});

app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsePayload = updateTodo.safeParse(updatePayload);
    if(!parsePayload.success){
      res.status(411).json({
        msg: "You sent the wrong inputs"
      });
      return;
    }

    // put it in mongodb
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})