const express=require('express')
const router=express()



const m1=require('../validation/user_validation')
router.get('/',function(req,res){
    res.send("hello user");
})
router.post('/',m1,function(req,res){
    res.status(201)
    res.send("data posted seccussfully");
})

module.exports=router