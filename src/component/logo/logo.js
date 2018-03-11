import React from "react"
import logoImg from "./job.png"
import "./logo.css"
class Logo extends React.Component{
  render(){
    return (
      <div className="logo-contianer">
        <img src={logoImg} alt="logo"/>
      </div>
    )
  }
}
export default Logo