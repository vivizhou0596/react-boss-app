import React from "react";
import Logo from "../../component/logo/logo"
import {WingBlank,WhiteSpace,List,InputItem,Button } from "antd-mobile"
import AuthRoute from "../../component/authRoute/authRouter"
class Login extends React.Component {
	constructor(props){
		super(props)
		this.register = this.register.bind(this)
	}
  register(){
		console.log(this.props)
		this.props.history.push('/register')
	}
	render() {
		return (
			<div>
				<AuthRoute></AuthRoute>
				<Logo></Logo>
				<WingBlank>
					<List>
						<InputItem>用户名</InputItem>
						<WhiteSpace/>
						<InputItem>密码</InputItem>
					</List>
					<WhiteSpace/>
					<Button type="primary" >登录</Button>
					<WhiteSpace/>
					<Button type="primary" onClick = {this.register}>注册</Button>
				</WingBlank>
			</div>
    )
	}
}

export default Login