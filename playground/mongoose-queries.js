const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

 var id = '5844e3bdfb3d8ce5316f64e8';

// if (!ObjectID.isValid(id)){
//     console.log('ID is not valid');
// }

// Todo.find({
//     _id : id
// }).then((todos)=>{
//     console.log('Todos:',todos);
// }); 

// Todo.findOne({
//     _id : id
// }).then((todo)=>{
//     console.log('Todo:', todo);
// });

// Todo.findById(id).then((todo)=>{
//     if (!todo) {
//         return console.log('Id not found.')
//     }
//     console.log('Todo by ID:', todo);
// }).catch((e)=> console.log(e));

User.findById(id).then((user)=>{
    if (!user) {
        return console.log('User was not found.')
    }
    console.log("User found:",user);
}).catch((e)=> console.log(e));