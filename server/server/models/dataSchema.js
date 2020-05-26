let mongoose=require('mongoose');

const data = mongoose.model('user',new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    address:{type:String},
    phone:{type:String},
    image:{type:String},
}),'user'
);

let tableSchema=mongoose.Schema({
    
    // name1:{type:String}
});



module.exports=data;