var polls = require('./../controllers/polls.js');
var path = require("path");

module.exports = function(app){

    app.post('/add_poll', function(req,res){
        console.log('inside add poll routes...');
        polls.addPoll(req,res);
    });
    // app.post('/add_options', function(req,res){
    //     console.log('inside add options routes...');
    //     questions.addOptions(req,res);
    // });



}