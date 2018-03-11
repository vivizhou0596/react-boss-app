const express = require('express')
const app = express()
const userRouter  =require('./user.js')
app.get('/',function(req,res){
	res.send('<h1>Hello world</h1>')
})
app.use('/user',userRouter)

app.listen(9093,function(){
	console.log('Node app start at port 9093')
})



