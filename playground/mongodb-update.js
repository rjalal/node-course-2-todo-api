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
    
   //findOneAndUpdate
//     db.collection('Todos').findOneAndUpdate({
//         _id: new ObjectID("5843ad5e53f33506d61da517")
//     },{
//         $set: {completed: true}
//     }, {
//         returnOriginal:false
//     }).then((result)=>{
//     console.log(result);
//    })

//     db.collection('Users').findOneAndUpdate({
//         _id: new ObjectID("584312f31fa656cb975f96ef")
//     },{
//         $set: {name: 'Mike'}
//     }, {
//         returnOriginal:false
//     }).then((result)=>{
//     console.log(result);
//    })

//     db.collection('Users').findOneAndUpdate({
//         _id: new ObjectID("584312f31fa656cb975f96ef")
//     },{
//         $inc: {age: 5}
//     }, {
//         returnOriginal:false
//     }).then((result)=>{
//     console.log(result);
//    })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("584312f31fa656cb975f96ef")
    },{
        $set: {name: 'Andrew'},
        $inc: {age: 5}
    }, {
        returnOriginal:false
    }).then((result)=>{
    console.log(result);
   })

    // db.close();


})