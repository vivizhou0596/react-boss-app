import React from "react"
import axios from "axios"
import {withRouter} from "react-router-dom"
@withRouter
class AuthRoute extends React.Component{
  componentDidMount(){
    const publicList  = ['/login','/register']
    const pathname = this.props.location.pathname
    if(publicList.indexOf(pathname)>-1){
      return null
    }
    //获取用户信息
    axios.get('/user/info').then((res)=>{
      if(res.status === 200){
        //console.log(res.data)
        if(res.data.code === '00001'){

        }else{
          console.log(this.props.history)
          this.props.history.push('/login')
        }
      }
    })
    //是否登录
    // 现在的URL地址，login是否需要跳转的
    // 用户的type 身份是boss还是牛人
    // 用户是否完善信息（选择头像 个人简介）
  }
  render(){
    return null
  }
}
export default  AuthRoute