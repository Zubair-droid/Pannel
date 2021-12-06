import React from 'react'
import "../App.css"
import Logo from '../images/panel-logo.png'
import Google from "../images/google-logo.png"
import {Link} from "react-router-dom"

function First() {
    return (
        <div className = "landPage">
        
         <h3 className="headline mt-5 fw-bolder">Create your Account</h3>
         
         <div className="firstPage mt-3">
            <div className="">
                {/* <h3 className="">Create Your Account</h3> */}
                <img src={Logo} className="logo" alt="panel-logo" />  
                <h2 className="fw-bolder text-center py-1">Pannel</h2>
                
            </div>

            
                
                <form className = "text-center ms-md-5">
                <div>
                <button className = "button btn-block align-baseline" style={{backgroundColor: "#B8B5FF"}}>
                    <p className="fw-bolder mb-0">Continue with  <img src={Google} style={{width: '38px', height: "30px", marginLeft: "-8px"}} alt="" />   </p>
                  
                </button>
                <p>or</p>
               
            </div>
                    <div class="form-group">
                      <input type="email" class="form-control fw-bold" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
                    </div>
                    
                    <div class="form-group">
                       <input type="password" class="form-control fw-bold" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <div class="form-group">
                        <input type="password" class="form-control fw-bold" id="exampleInputPassword1" placeholder="Confirm Password" />
                    </div>

                    <div className="">
                        <button className = "button btn-block " style={{backgroundColor: "#B8B5FF"}} >
                        <p className="fw-bolder mb-0">Sign up</p>
                        </button>

                       
                        
                    </div>

                    <div className = "right">
                        <p className="fw-bolder fs-6"> Existing user? </p>
                        <Link to = "/Login" style={{textDecorationLine: "none"}}>
                        <button className = "button" style={{backgroundColor:"#FF7171"}}>Login</button>
                        </Link>
                    </div>
                </form>
                

               
            </div>


            
    </div>
      
    )
}

export default First
