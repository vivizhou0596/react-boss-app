const express  = require("express")
const Router = express.Router()
Router.get('/info',function(req,res){
  return res.json({'code':'00001'})
})
module.exports = Router