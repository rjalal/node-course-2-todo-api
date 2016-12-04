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
    
   //DeleteMany 
//    db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
//        console.log(result);
//    })

   //DeleteOne
//    db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
//        console.log(result);
//    })

   //findOneAndDelete
//     db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
//     console.log(result);
//    })

   //DeleteMany 
//    db.collection('Users').deleteMany({name:'Andrew'}).then((result)=>{
//        console.log(result);
//    })

   //findOneAndDelete
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID("584313025c3097cba1b89842")
    }).then((result)=>{
    console.log(result);
   })

    // db.close();
})