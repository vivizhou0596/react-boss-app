const express  = require("express")
const Router = express.Router()
Router.get('/info',function(req,res){
  return res.json({'code':'00001'})
  //随便写点什么



})
module.exports = Router