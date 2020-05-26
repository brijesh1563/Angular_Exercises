let http=require('http')
let express=require('express');
let port=process.env.PORT || 5000;
let app=express();
let appRoutes=require('./Routes/appRoutes');
let mongoose=require('mongoose');
let bodyParser=require('body-parser');
let cors=require('cors');
let Table=require('./models/dataSchema')

// mongodb+srv://dhairya:dhairya@cluster0-czwec.mongodb.net/angulartable?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://brijesh:brijesh@cluster0-lgvvb.mongodb.net/angular?retryWrites=true&w=majority', {useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>
{
    console.log("Connected to MongoDB...")
})
.catch(err=>{
    console.log(err);
})
// 103.249.234.137/32
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use('/',appRoutes)
app.get('/user',(req,res)=>
{
    Table.find({},(err,tables)=>
    {
        if(err) return res.status(500).json({errmsg:err})
        res.json(tables);
    })
    // res.status(200).json({msg:"Get request is working"})
});




http.createServer(app).listen(port);

console.log("Server is running on port : ",port)