import React from 'react'
import { useState } from 'react';
import "../App.css"
import {Link} from "react-router-dom"
import Logo from '../images/panel-logo.png'


export default function Login(props) {
    let [name, setName] = useState(props.name);
    const [password, setPassword] = useState(props.password)

    const nameonChange = (e) => {
        setName(e.target.value);
        console.log(name);
    }
    // eslint-disable-next-line
    const handleClick = (e)=>{
        let uppercaseName = name.toUpperCase()
        setName(uppercaseName)
        e.preventDefault()
    }
    const pwonChange = (e) => {
        setPassword(e.target.value);
        console.log(password);
    }

    return (
        <div className="loginContainer">
            <div className="gradient">
                <div className="gradientContent">
                    <h3 className="fw-bolder"> Welcome to Pannel</h3>
                     <img src={Logo} style={{margin: "0 auto"}} alt="logo" />
                    <p className="fw-bold">Find your friends now!</p>
                </div>
            </div>
            
            
            <div className="login-form">
               {/* <div className = "closeDiv">
                 <button className="closeBtn btn-primary"> ✖ </button>
               </div> */}
                
                <div className="login-logo">
               <img src = {Logo} className="w-100 m-auto" alt = "logo" />

                </div>
                <h2
                className="form-header"
                // style={{ backgroundColor : "#F7F7F7" ? {color : "#F7F7F7"} : {color:"#2C272E"}}}
                > Continue to Signin </h2>
               
               
                <form> 
                    <div class="form-row">
                        <div class="form-group col-12 w-75 my-2 m-auto">
                            <label htmlFor="inputName">User name</label>
                            <input type="email" onChange={nameonChange} value={name} className="form-control py-0" id="userName" placeholder="Email" />
                        </div>
                        <div class="form-group col-sm-12 w-75 my-2 m-auto">
                            <label for="inputPassword4">Password</label>
                            <input type="password" onChange={pwonChange} value={password} className="form-control" id="inputPassword4" placeholder="Password" />
                        </div>
                    </div>
                
    
                </form>

                <div className = "buttonCon">
                <Link to ="/Home" style={{textDecoration: "none", width: "100%"}}>
                <button type="submit" className="button action-btn my-3 pad2y">Sign in</button>
                </Link>
  

                <div className = "right">
                    <p>New User ? </p>
                        
                    <Link to ="/First" style={{textDecoration: "none"}}>
                    <button type="submit" className="button btn-bg my-3 pad2y"> Sign up </button>
                    </Link>
                    </div>

                </div>    
                
            </div>
        </div>
    )
}
