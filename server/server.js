var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose'); 
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos',(req,res)=> {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc)=> {
        res.send(doc);
    },(e) => {
        res.status(400).send(e);
    });
    console.log(req.body);
});

app.listen(3000, ()=> {
    console.log('Started on port 3000');
})


// Old code to insert data 

// var newUser = new User({
//     email:'rami.jalal@gmail.com'
// });

// newUser.save().then((doc)=>{
//     console.log(JSON.stringify(doc,undefined,2));
// }, (e) => {
//     console.log('Unable to save the user', e);
// })

// var newTodo = new Todo({
//     text:'Add RealTime Integration.    '
// });

// newTodo.save().then((doc)=>{
//     console.log('Saved todo.', doc)
// }, (e) => {
//     console.log('Unable to save todo')
// });

// var newTodo2 = new Todo({
//     text: 'check your calendar',
//     completed: false
// });

// newTodo2.save().then((doc)=>{
//     console.log('Saved todo.', doc)
// },(e)=> {
//     console.log('Unable to save todo');
// });
