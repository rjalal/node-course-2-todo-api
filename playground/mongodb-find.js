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
    
    // db.collection('Todos').find().toArray().then((res)=>{
    //     console.log('Todos:');
    //     console.log(JSON.stringify(res,undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch the data.', err);
    // });

    // db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch the data.', err);
    // });

    // db.collection('Todos').find({
    //     _id: new ObjectID('5843a35c53f33506d61da2f0')
    // }).toArray().then((docs)=>{
    //     console.log('Todos:');
    //     console.log(JSON.stringify(docs,undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch the data.', err);
    // });


    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch the data.', err);
    // });

    db.collection('Users').find({name:'Rami'}).toArray().then((docs)=>{
        console.log('Users:');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to fetch the data.', err);
    });


    // db.close();
})