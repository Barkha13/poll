var polls = require('./../controllers/polls.js');
var path = require("path");

module.exports = function(app){

    app.post('/add_poll', function(req,res){
        polls.addPoll(req,res);
    });
    
    app.get('/all', function(req,res){
        polls.show(req,res);
    });

    app.get('/show_poll/:id',function(req,res){
        polls.showPoll(req,res);
    })

    app.get('/vote/:p_id/:option',function(req,res){
        polls.addVote(req,res);
    })

    app.get('/delete/:d_id',function(req,res){
        polls.deletePoll(req,res);
    })
}