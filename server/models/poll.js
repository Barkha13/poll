var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PollSchema = new mongoose.Schema({
    name : {type : String, required: true, minlength:3},
    question : {type : String, required: true, minlength:8},
    options : [{type: Schema.Types.ObjectId, ref: 'Option'}]
},{
    timestamps : true
});

var OptionSchema = new mongoose.Schema({
    _question : {type: Schema.Types.ObjectId, ref: "Poll"},
    option : {type: String, required: true, minlength:3},
    vote : {type: Number}
});

mongoose.model('Poll', PollSchema);
mongoose.model('Option', OptionSchema);