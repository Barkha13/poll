var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');

module.exports = {

    show: function(req,res){
        console.log('in cont...')
        Poll.find({}, function(err, polls){
            console.log(polls);
            res.json(polls);
        })
    },

    addPoll : function(req,res){
        console.log('name is--',req.body.name, req.body.question, req.body.option1,req.body.option2,req.body.option3,req.body.option4);
        var poll = new Poll({
            name : req.body.name,
            question : req.body.question,
            option1 : req.body.option1,
            vote1 : 0,
            option2 : req.body.option2,
            vote2 : 0,
            option3 : req.body.option3,
            vote3 : 0,
            option4 : req.body.option4,
            vote4 : 0
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

    showPoll : function(req,res){
        Poll.findOne({_id : req.params.id},function(err,poll){
            res.json(poll);
        })
    },

    addVote : function(req,res){
        Poll.findById(req.params.p_id, function(err,poll){
            if(req.params.option == poll.option1){
                poll.vote1 = poll.vote1 + 1;
            }
            else if(req.params.option == poll.option2){
                poll.vote2 = poll.vote2 + 1;
            }
            else if(req.params.option == poll.option3){
                poll.vote3 = poll.vote3 + 1;
            }
            else if(req.params.option == poll.option4){
                poll.vote4 = poll.vote4 + 1;
            }

            poll.save(function(err){
                if(err){
                    console.log("something went wrong...");
                }
                else{
                    console.log('added vote in db...');
                }
            })
        })
    },

    deletePoll : function(req,res){
        Poll.findOneAndRemove({_id : req.params.d_id},function(err){
            if(err){
                console.log("something went wrong...");
            }
            else{
                console.log('deleted poll in db...');
            }
        })
    }

}
