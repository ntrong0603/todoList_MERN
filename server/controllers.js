const todoItems = require('./models');

exports.create = async (req, res, next) =>{
    let { text } = req.body;
    try{
        let newTodo = new todoItems({
            text
        });
        await newTodo.save();
        return res.json(newTodo);
    }
    catch(err){
        console.log(err);
    }
}

exports.getAll = async (req, res, next ) => {
    try{
        let todos = await todoItems.find();
        return res.json(todos);
    }
    catch(err){
        console.log(err);
    }
}

exports.delete = async (req, res, next) => {
    try {
        let todo  = await todoItems.findById(req.params.todoId);
        await todo.remove();
        return res.json({ todoId: req.params.todoId });
    } catch (err) {
        console.log(err);
    }
}

exports.complate = async (req, res, next) => {
    try {
        let todo = await todoItems.findById(req.params.todoId);
        todo.isComplete = !todo.isComplete;
        await todo.save();
        return res.json({ todoId: req.params.todoId });
    } catch (err) {
        console.log(err);
    }
}