var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var Option = mongoose.model('Option');

module.exports = {

    addPoll : function(req,res){
        console.log('name is--',req.body.name, req.body.question);
        var poll = new Poll({
            name : req.body.name,
            question : req.body.question
        });

        poll.save(function(err){
            if(err){
                console.log("something went wrong...");
            }
            else{
                console.log('added poll in db...');
            } 
        })
    },

    // addOptions : function(req,res){
    //     var option = new Option({
    //         option : req.body.opt1,
    //         vote : 0
    //     })
    // }
}
