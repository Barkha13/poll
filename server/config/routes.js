var polls = require('./../controllers/polls.js');
var path = require("path");

module.exports = function(app){

    app.post('/add_poll', function(req,res){
        console.log('inside add poll routes...');
        polls.addPoll(req,res);
    });
    
    app.get('/all', function(req,res){
        console.log('display all the polls');
        polls.show(req,res);
    });

    app.get('/show_poll/:id',function(req,res){
        polls.showPoll(req,res);
    })

    app.get('/vote/:p_id/:option',function(req,res){
        console.log('inside vote route routes...',req.params.vote1)
        polls.addVote(req,res);
    })

    app.get('/delete/:d_id',function(req,res){
        polls.deletePoll(req,res);
    })
}