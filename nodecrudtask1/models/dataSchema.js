let mongoose=require('mongoose');



let tableSchema=mongoose.Schema({
    name:{type:String},
    description:{type:String},
    // name1:{type:String}
});



module.exports=mongoose.model('table',tableSchema)