const express = require ("express")
const app = express();
const {route }= require ("express")
const router = express.Router() ; 
const listModel = require("../Model/ListModel")

router.get("/" , (req,res) =>{
    listModel.find({} , (err,data)=>{
        if(err){
            res.send(err).status(404)
        }
        else{
            res.send(data).status(200)
        }
    })
});

router.get('/:id' , (req,res) =>{
    let id = req.params.id
    listModel.find({_id:id} , (err,data) =>{
        if(err){
            res.send(err).status(404)
        }
        else{
            res.send(data).status(200)
        }
    })
})

router.post('/' , (req,res) =>{
    const {list} = req.body;
    // let arr=[]
    if(!list){
        ("Empty string cannot be accepted in todo list")
    }
    // if(arr && arr.length >0){
    //     res.send(arr).status(404)

        
    // return;
    // }

    let listObj = new listModel({
        list,
        createdAt: new Date(),
      });
      listObj.save((err, result) => {
        if (err) {
          res.send(err).status(404);
        } else {
          res.send(result).status(200);
        }
      });
    });


 router.put('/:id' , (req,res) =>{
    const update = listModel.findByIdAndUpdate(req.params.id , {$set:req.body})
    .then(()=>{
        res.set(200).send("Update Successfully")
    }).catch((err)=>{
        res.set(404).send(`Error ${err}`);
    })
   
 })


router.delete('/:id' , (req,res)=>{
    const deleteItem = listModel.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.set(200).send("Delete Successfully")
    }).catch((err)=>{
        res.set(404).send(`Error ${err}`);
    })
})

module.exports = router ; 
