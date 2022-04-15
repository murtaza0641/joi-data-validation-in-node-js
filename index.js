const express=require('express')
const app=express()
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port=5000

app.get('/',(req,res,next )=>{
    res.send("hello world")
    next()
})
const m1=(req,res)=>{
    res.send("hello user this is m1")
}
const route1=require(__dirname+'/src/routes/router.js')
app.use('/user',route1)
app.post('/',(req,res)=>{
    res.status(405)
    res.json({
        status_code: res.statusCode,
        error:{
            succuss:0,
            message:"HTTP Method not found"
        }
    })
})
app.listen(port,()=>{
    console.log(`this server is listening on ${port}`)
})