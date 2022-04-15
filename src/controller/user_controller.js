const { string } = require("joi")

const joi =  require(joi)

const schema={
    user : joi.object({
        name:joi.string().max(30).required(),
        from:joi.string().max(30).required(),
        email:joi.string().email().required(),
        password:joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,16}$")).required()
    })
}
module.exports=schema;