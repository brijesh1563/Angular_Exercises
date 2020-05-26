let express=require('express')
let router=express.Router();
let paginate=require('jw-paginate');
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
router.get('/api/items', (req, res, next) => {
    console.log("shah")
    // example array of 150 items to be paged
    const items = [...Array(150).keys()].map(i => ({ id: (i + 1), name: 'Item ' + (i + 1) }));

    // get page from query params or default to first page
    const page = parseInt(req.query.page) || 1;

    // get pager object for specified page
    const pageSize = 5;
    const pager = paginate(items.length, page, pageSize);

    // get page of items from items array
    const pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);

    // return pager object and current page of items
    return res.json({ pager, pageOfItems });
});
router.get('/pages',(req,res) => {
    var pageNo = parseInt(req.query.pageNo)
    var size = parseInt(req.query.size)
    var query = {}
    if(pageNo < 0 || pageNo === 0) {
          response = {"error" : true,"message" : "invalid page number, should start with 1"};
          return res.json(response)
    }
    query.skip = size * (pageNo - 1)
    query.limit = size
    // Find some documents
         Table.count({},function(err,totalCount) {
               if(err) {
                 response = {"error" : true,"message" : "Error fetching data"}
               }
           Table.find({},{},query,function(err,data) {
                // Mongo command to fetch all data from collection.
              if(err) {
                  response = {"error" : true,"message" : "Error fetching data"};
              } else {
                  var totalPages = Math.ceil(totalCount / size)
                  response = {"error" : false,"message" : data,"pages": totalPages};
              }
              res.json(response);
           });
         })
  })


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