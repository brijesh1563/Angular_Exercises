let express=require('express')
let router=express.Router();
let Table=require('../models/dataSchema')


router.post('/create',(req,res,next)=>
{
    let newTable=new Table({
        name:req.body.name,
        description:req.body.description,
        // name1:req.body.name1
    })
    newTable.save((err,table)=>
    {
        if(err)
        {
            res.status(500).json({errmsg:err})
        }
        res.status(200).json({msg:table})

    })
    // res.status(200).json({msg:"Post request is working"})
});

router.get('/read',(req,res,next)=>
{
    Table.find({},(err,tables)=>
    {
        if(err)
        {
            res.status(500).json({errmsg:err})
        }
        res.status(200).json({msg:tables})
    })
    // res.status(200).json({msg:"Get request is working"})
});
router.put('/update',(req,res,next)=>
{
    Table.findById(req.body._id,(err,table)=>
    {
        if(err)
        {
            res.status(500)
        }
        table.name=req.body.name;
        // country.name1=req.body.name1
        table.description=req.body.description;
        table.save((err,table)=>
        {
            if(err)
            {
            res.status(500)
            }
            res.status(200)
            
        })
    })
    res.status(200).json({msg:"Put request is working"})
});
router.delete('/delete/:id',(req,res,next)=>
{
    Table.findOneAndRemove({_id:req.params.id},(err,table)=>
    {
        if(err)
        {
        res.status(500)
        }
        res.status(200)
    })
    res.status(200).json({msg:"Delete request is working"})
});


module.exports=router;