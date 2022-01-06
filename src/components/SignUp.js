import { useState } from "react";
import './style.css';
import { withRouter } from 'react-router-dom';
function SignUp(props) {
    const [userData, setuserData] = useState({
        email:'',
        firstName:'',
        lastName:'',
        password:'',
        confirmPassword:''
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

const [nameError, setnameError] = useState("")
const validateName=()=>{
    if(userData.firstName){
        let regex =/^[a-zA-Z ]{2,30}$/;
        if(regex.test(userData.firstName)){
            setnameError("");
            return true;
        }
        else{
            setnameError("enter valid name");
        }}
        else{
            setnameError("enter name");
        }
        return false; 
};
    const [passwordError, setpasswordError] = useState("")
    const validatePassword=()=>{
        if(userData.confirmPassword===userData.password){
            setpasswordError="";
            return true;
        }
        else{
            setpasswordError("password didn't matched,confirm again.")
        } 
        return false;   
    }

let updateSignUpData=(event)=>{
    // event.preventDefault();
    setuserData({
        ...userData,
        [event.target.name]:event.target.value,
    })
}


let saveData=(event)=>{
  
    validateEmail();
    validateName();
    validatePassword();
    if(validateEmail()&& validateName()&&validatePassword()){
        props.getUserData(userData)
        // event.preventDefault();
        //clearing the form
        setuserData({
            email:'',
            firstName:'',
            lastName:'',
            password:'',
            confirmPassword:''
        });
    }
       
    
   
};
    let navigateToLogin=()=>{
        // console.log(props);
        props.history.push('/login')
    }



    return (<form>
        <div className="container">
            <h2>SignUp Form</h2>
            
                <div className="mb-3">
                    <input
                    name="email"
                    type="text"
                    className="form-control"
                    placeholder="Enter Email"
                    value={userData.email}
                    onChange={(event)=>{updateSignUpData(event)}}
                    />
                {emailError&&<div className="errMsg">{emailError}</div>}
                </div>
                <div className="mb-3">
                    <input
                    name="firstName"
                    type="text"
                    className="form-control"
                    placeholder="Enter Firstname"
                    value={userData.firstName}
                    onChange={(event)=>{updateSignUpData(event)}}
                    />
                {nameError&&<div className="errMsg">{nameError}</div>}
                </div>
                <div className="mb-3">
                    <input
                    name="lastName"
                    type="text"
                    className="form-control"
                    placeholder="Enter Lastname"
                    value={userData.lastName}
                    onChange={(event)=>{updateSignUpData(event)}}
                    />
                
                </div>
                <div className="mb-3">
                    <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    value={userData.password}
                    onChange={(event)=>{updateSignUpData(event)}}
                    />
                
                </div>
                <div className="mb-3">
                    <input
                    name="confirmPassword"
                    type="password"
                    className="form-control"
                    placeholder="Confirm Password"
                    value={userData.confirmPassword}
                    onChange={(event)=>{updateSignUpData(event)}}
                    />
                    {passwordError&&<div className="errMsg">{passwordError}</div>}
                
                </div>
                <button type="submit" className="btn btn-primary" onClick={saveData,navigateToLogin}>SIGN UP</button>
                <br/>
                <br/>
                <h4 style={{cursor:'pointer'}} onClick={navigateToLogin}>Already have an account? Login here !</h4>
           
            
        </div>
        </form>
    )
}

export default withRouter(SignUp) 