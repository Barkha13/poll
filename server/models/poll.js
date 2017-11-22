var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new mongoose.Schema({
    name : {type : String, required: true, minlength:3},
    question : {type : String, required: true, minlength:8},
    option1 : {type: String, required: true, minlength:3},
    vote1 : {type: Number},
    option2 : {type: String, required: true, minlength:3},
    vote2 : {type: Number},
    option3 : {type: String, required: true, minlength:3},
    vote3 : {type: Number},
    option4 : {type: String, required: true, minlength:3},
    vote4 : {type: Number}
},{
    timestamps : true
});

mongoose.model('Poll', PollSchema);
