import { useState } from "react";
import './style.css';
import { withRouter } from 'react-router-dom';
import { hover } from "@testing-library/user-event/dist/hover";
function Login(props) {
    const [userData, setuserData] = useState({
        email:'',
        password:''
})
console.log(userData);

const [emailError, setemailError] = useState("")
const validateEmail=()=>{
    if(userData.email){
        let regex = /^\S+@\S+$/;
        if(regex.test(userData.email)){
            setemailError("");
            return true;
        }
        else{
            setemailError("enter valid email-Id");
        }}
        else{
            setemailError("enter email-ID");
        }
        return false; 
};

let updateLoginData=(event)=>{
    // event.preventDefault();
    setuserData({
        ...userData,
        [event.target.name]:event.target.value,
    })
}


let saveData=(event)=>{
  
    validateEmail();
    if(validateEmail()){
        props.getUserData(userData)
        // event.preventDefault();
        //clearing the form
        setuserData({
            email:'',
            password:''
        });
    }
    
   
};
    let navigateToSignUp=()=>{
        // console.log(props);
        props.history.push('/signup')
    }

    let navigateToHome=()=>{
        props.history.push('/')
    }



    return (
        <div className="container">
            <h2>Login Form</h2>
            
                <div className="mb-3">
                    <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    value={userData.email}
                    onChange={(event)=>{updateLoginData(event)}}
                    />
                {emailError&&<div className="errMsg">{emailError}</div>}
                </div>
                <div className="mb-3">
                    <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={userData.password}
                    onChange={(event)=>{updateLoginData(event)}}
                    />
                
                </div>
                <button type="submit" className="btn btn-primary" onClick={saveData,navigateToHome}>LOGIN</button>
                <br/>
                <br/>
                <h4 style={{cursor:'pointer'}} onClick={navigateToSignUp}>Don't have an account? Sign up</h4>

           
            
        </div>
    )
}

export default withRouter(Login) 