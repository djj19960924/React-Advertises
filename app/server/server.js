const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const userRouter = require('./user')
const app = express()
//操作
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user',userRouter)
app.listen(9093,function () {
   console.log('Node app start at port 9093 ok');
})
