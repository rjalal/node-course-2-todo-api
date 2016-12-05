const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo')

const todos = [{
    _id: new ObjectID(),
    text:'First test todo'
}, {
    _id: new ObjectID(),
    text:'Second test todo',
    completed: true,
    completedAt: 333
},
{
    _id: new ObjectID(),
    text:'Third test todo',
    completed: true,
    completedAt: 333
}];

beforeEach((done)=> {
    Todo.remove({}).then(()=>{
        return Todo.insertMany(todos);
    }).then(()=> done());    
});

describe('POST /todos', () => {
    it('should create new todo', (done)=> {
        var text = 'test todo text';

        request(app)
            .post('/todos')
            .send({text})
            .expect(200)
            .expect((res)=> {
                expect(res.body.text).toBe(text)
            })
            .end((err,res)=> {
                if (err) {
                    return done(err);
                }

                Todo.find({text}).then((todos)=> {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
                    done();
                }).catch((e) => done(e));
            })
    });

    it('should not create todo with invalid body data',(done)=>{
        var text = '';

        request(app)
            .post('/todos')
            .send({text})
            .expect(400)
            .end((err,res)=> {
                if (err) {
                    return done(err);
                }

                Todo.find().then((todos)=> {
                    expect(todos.length).toBe(3);
                    done();
                }).catch((e) => done(e));
            })   
    })
});

describe('GET /todos', ()=>{
    it('should get all todos.', (done)=>{

    request(app)
        .get('/todos')
        .expect(200)
        .expect((res)=>{
            expect(res.body.todos.length).toBe(3);
        })
        .end(done);
    })
});

describe('GET /todos/:id', ()=>{
    it('should return todo doc', (done)=>{
        
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res)=> {
                expect(res.body.todo.text).toBe(todos[0].text);
            })
            .end(done);

    });

     it('should return 404 if todo not found', (done)=>{
    //     //Make sure you get 404 back 
        var newObjectId = new ObjectID().toHexString();

        request(app)
            .get(`/todos/${newObjectId}`)
            .expect(404)
            .end(done);
     });

     it('should return 404 for non object IDs', (done)=> {
    //     // /todos/123

        request(app)
            .get('/todos/123')
            .expect(404)
            .end(done);

     });

});

describe('DELETE /todos/:id', ()=>{
    it('should remove a todo', (done)=> {
        var hexId = todos[1]._id.toHexString();

        request(app)
            .delete(`/todos/${hexId}`)
            .expect(200)
            .expect((res)=>{
                expect(res.body.todo._id).toBe(todos[1]._id.toHexString());
            })
            .end((err, res)=> {
                if (err) {
                    return done(err);
                }

                 Todo.findById(hexId).then((todo)=> {
                    expect(todo).toNotExist();
                    done();
                }).catch((e) => done(e));
            })
    });
    
     it('should return 404 if todo not found', (done)=>{
    //     //Make sure you get 404 back 
        var newObjectId = new ObjectID().toHexString();

        request(app)
            .get(`/todos/${newObjectId}`)
            .expect(404)
            .end(done);
     });

     it('should return 404 for non object IDs', (done)=> {
    //     // /todos/123

        request(app)
            .get('/todos/123')
            .expect(404)
            .end(done);
     });
});

describe('PATCH /todos/:id', () => {
    it('should update todo', (done)=>{
        //grap id for first item
        var hexId = todos[0]._id.toHexString();
        text = 'Something else to do';
        //update text, set completed true 
        //200
        // text is changed, compelted is true, completedAt is a number 

        request(app)
            .patch(`/todos/${hexId}`)
            .send({
                text,
                completed:true
            })
            .expect(200)
            .expect((res)=>{
                expect(res.body.todo.text).toNotBe(todos[0].text);
                expect(res.body.todo.text).toBe(text);
                expect(res.body.todo.completed).toBe(true);
                expect(res.body.todo.completedAt).toBeA('number');
            })
            .end(done);
    });

    it('should clear completed at when todo is not completed',(done)=>{
        //grap id for second todo item
        var hexId = todos[1]._id.toHexString();
        text = 'Something else to do';
        //update text, set completed true 
        //200
        // text is changed, compelted is true, completedAt is a number 

        request(app)
            .patch(`/todos/${hexId}`)
            .send({
                text,
                completed:false
            })
            .expect(200)
            .expect((res)=>{
                expect(res.body.todo.text).toNotBe(todos[1].text);
                expect(res.body.todo.text).toBe(text);
                expect(res.body.todo.completed).toBe(false);
                expect(res.body.todo.completedAt).toNotExist;
            })
            .end(done);

    });
})

