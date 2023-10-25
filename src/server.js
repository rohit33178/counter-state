const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

let users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    users.push(newUser);
    res.json(newUser);
});

app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users[userId] = req.body;
    res.json(users[userId]);
});
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users.splice(userId, 1);
    res.json({ message: 'User deleted' });
});

app.get('/getCart', (req, res) => {
   // let items = req.body.items
   let items = [1, 2, 3, 4]
   let sum = items.reduce((acc, item) => acc + item) 
   res.send(sum)
})

function getOddData(){
  
let users =  users.find({})
  
}


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});