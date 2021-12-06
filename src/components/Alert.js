import React from 'react'

export default function Alert(props) {


    const myStyle = {
        width: "50%",
        margin: "auto",
        display: "flex",
        height: "5vh",
        padding: "25px 0",
        justifyContent: "right",
        alignItems: "center",
        textAlign: "right",
        fontFamily: "Lato",
        
    }
    return (
        props.alert && <div style={myStyle} className={`alert  alert-dismissible fade show`} role="alert">
            <strong className = "text-center">{props.alert.msg}</strong> 
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    )
}
