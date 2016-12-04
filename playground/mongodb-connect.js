//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj); 

//#Destructuring 
// var user = {name:'Rami', age:35, location:'US'};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    };

    console.log('Connected to MongoDB server');
    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err,result)=>{
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     };
    //     console.log(JSON.stringify(result.ops,undefined,2))
    // });

//     db.collection('Users').insertOne({
//         name: 'Rami',
//         age: 25,
//         location: 'US',
//         //_id: '123'
//     }, (err,result)=> {
//         if (err) {
//             return console.log('Unable to insert user', err);
//         };
//         console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
//     });

    db.close();
})