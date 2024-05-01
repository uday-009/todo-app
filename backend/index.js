const express = require('express')
const app = express()
const port = 3000;

app.use(express.json());

app.post("/todo", (req, res) => {
    res.send()
});


app.get("/todos", (req, res) => {
    res.send()
});

app.put("/completed", (req, res) => {
    res.send()
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})