let http=require('http')
let express=require('express');
let port=process.env.PORT || 5000;
let app=express();
let appRoutes=require('./Routes/appRoutes');
let mongoose=require('mongoose');
let bodyParser=require('body-parser');
let cors=require('cors');

mongoose.connect('mongodb://localhost:27017/Angular-crud',{useMongoClient:true})
.then(()=>
{
    console.log("Successfully")
})
.catch(err=>{
    console.log(err);
})
app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use('/',appRoutes)




http.createServer(app).listen(port);

console.log("Backend running on port ",port)