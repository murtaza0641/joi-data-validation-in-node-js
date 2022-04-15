const joi =  require('joi')

const schema={
    user : joi.object({
        name:joi.string().max(30).required(),
        gm:joi.string().max(30).required(),
        from:joi.string().max(30).required(),
        email:joi.string().email().required(),
        password:joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,16}$")).description('this key will match anything you give it').required(),
        repeat_password:joi.ref('password')

        // password:joi.string().pattern(new RegExp("^[a-zA-Z0-9]{6,16}$")).message("invakid").required(),
    })
}
module.exports=schema