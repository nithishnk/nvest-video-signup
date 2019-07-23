import React, { Component } from 'react'
import './Home.css';
import Stepper from '../Component/Stepper'
import Logo from '../images/GX.png'

export default class Home extends Component {
render() {
  return (
    <div className="container-fluid ">
     <center>
     <div className="d-flex justify-content-center">
     <img className="log" src={Logo}></img>
     </div>  
     <div className="fixed-bottom"> 
     <Stepper/>
     </div> 
     </center>
    </div>
    )
  }
}
 