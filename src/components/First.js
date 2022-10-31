import React from 'react'
import "../App.css"
import  GoogleImg from "../images/google-logo.png"
import Logo from "../images/panel-logo.png"
import  styled from "styled-components";
import { Link } from "react-router-dom"
// import { connect } from "react-redux"
// import { signInAPI } from "../actions/index.js";
 import { auth } from "../firebase"
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';



const Google = styled.button`
    /* border: none; */
    /* width: 38px; */
    height: 30px;
    /* marginLeft: -8px; */
    /* background-color: "#B8B5FF"; */
    
`;

const First =() =>{
    
    const signInWithGoogle = (e)=>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then((payload) => {
            console.log(payload);
        })
        .catch((err) => {
            console.log(err);
        })
        e.preventDefault();
    } 

    return (
        <div className = "landPage">
        
         <h3 className="headline mt-5 fw-bolder">Create your Account</h3>
         
         <div className="firstPage mt-3">
            <div className="">
                {/* <h3 className="">Create Your Account</h3> */}
                <img src= { Logo } className="logo" alt="panel-logo" />  
                <h2 className="fw-bolder text-center py-1">Pannel</h2>
                
            </div>

 
                <form className = "text-center ms-md-5" >
                <div>
                <Google onClick={signInWithGoogle} className="button btn-block">
                {/* <button className = "button btn-block align-baseline" style={{backgroundColor: "#B8B5FF"}}> */}
                   
                    <p className="fw-bolder mb-0">Continue with  <img src= { GoogleImg } style={{width: '38px', height: "30px", marginLeft: "-8px"}} alt="" />   </p>
                  
                {/* </button> */}
                </Google>

            
                <p>or</p>
               
            </div>
                    <div className="form-group">
                      <input type="email" className="form-control fw-bold" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
                    </div>
                    
                    <div className="form-group">
                       <input type="password" className="form-control fw-bold" id="exampleInputPassword1" placeholder="Password" />
                    </div>

                    <div className="form-group">
                        <input type="password" className="form-control fw-bold" id="exampleInputPassword2" placeholder="Confirm Password" />
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





// const mapStateToProps = (state) => {
//     return {};
// }

// const mapDispatchToProps = (dispatch) => ({
//     signIn: ()=> dispatch(signInAPI()),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(First)
export default First
