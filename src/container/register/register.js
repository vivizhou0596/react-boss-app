import React from "react"
import Logo from "../../component/logo/logo"
import {List,InputItem,Button,Radio,WingBlank,WhiteSpace} from "antd-mobile"
class Register extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      type:'genius',//角色分别，boss
      user:'',//用户名
      pwd:'',//密码
      repeatPwd:''//确认密码
    }
    this.handleRegister = this.handleRegister.bind(this)
  }
  handleChange(key,val){
    this.setState({
      [key]:val
    })
  }
  handleRegister(){
    console.log(this.state)
  }
  render(){
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo>
          <List>
            <InputItem
              onChange={(v)=>this.handleChange('user',v)}
            >用户名</InputItem>
            <WhiteSpace/>
            <InputItem
              type="password"
              onChange={(v)=>this.handleChange('pwd',v)}
            >密码</InputItem>
            <WhiteSpace/>
            <InputItem
              type="password"
              onChange={(v)=>this.handleChange('repeatPwd',v)}
            >确认密码</InputItem>
            <WhiteSpace/>
            <RadioItem
              checked={this.state.type === 'genius'}
              onChange = {()=>{this.handleChange('type','genius')}}
            >牛人</RadioItem>
            <RadioItem
              checked={this.state.type === 'boss'}
              onChange = {()=>{this.handleChange('type','boss')}}
            >BOSS</RadioItem>
          </List>
        <WhiteSpace/>
        <Button type="primary" onClick={this.handleRegister}>注册</Button>
      </div>
    )
  }
}

export default Register