// const {user}=require('./user_schema')

const joi = require("joi")

const { user } = require("./user_schema");
const addUserValidation =  (req,res,next)=>{
        const value= user.validate(req.body);
        if(value.error){
            const gmcyber=res.status(411)
            res.json({
                status_code:`${res.statusCode}`,
                error:{
                success:0,
                message: value.error.details[0].message
            }})
        } else {
            next()
        }
    }
module.exports=addUserValidation