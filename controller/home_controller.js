const Todo = require('../models/todo');

module.exports.home = function(req , res){
    Todo.find({}, function(err , data){
        if(err){
            console.log('Error in fetching the data from db');
            return;
        }
        return res.render('home', {
            todo_data : data
        });
    });
};

module.exports.todo_create = function(req , res){
    console.log(req.body.dueDate);
    var date = req.body.dueDate;
    var split = date.split("-");
    if(split[1]=='01'){
        split[1] = 'Jan';
    } 
    if(split[1]=='02'){
        split[1] = 'Feb';
    } 
    if(split[1]=='03'){
        split[1] = 'Mar';
    } 
    if(split[1]=='04'){
        split[1] = 'Apr';
    } 
    if(split[1]=='05'){
        split[1] = 'May';
    } 
    if(split[1]=='06'){
        split[1] = 'Jun';
    } 
    if(split[1]=='07'){
        split[1] = 'Jul';
    } 
    if(split[1]=='08'){
        split[1] = 'Aug';
    } 
    if(split[1]=='09'){
        split[1] = 'Sept';
    } 
    if(split[1]=='10'){
        split[1] = 'Oct';
    } 
    if(split[1]=='11'){
        split[1] = 'Nov';
    } 
    if(split[1]=='12'){
        split[1] = 'Dec';
    } 
    date = split[1]+' '+split[2]+', '+split[0];
    req.body.dueDate = date;
    Todo.create(req.body, function(err, newEntry){
        if(err){
            console.log('Error in creating entry..!');
            return;
        }
        console.log('*****',newEntry);
        return res.redirect('back');
    });
};

module.exports.todo_delete = function(req , res){
    let id = req.body._id ;
    if(id == undefined){
        return res.redirect('back');
    }
    for(let i of id){
        Todo.findByIdAndDelete(id , function(err){
            if(err){
                console.log("Error in deleting event from db");
                return;
            }
        });
    }
    return res.redirect('back');
}