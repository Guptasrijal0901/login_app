import React , {useState} from "react";
import "./Login.css";


const Login = ()=>{

        const [ login, setlogin] = useState({
            email: "",
            password:"",
        })
    
        const handlechange = e=>{
            
            const {name, value}= e.target
            // console.log(name, value)
            setlogin({...login, [name]: value})
        }


    return <>
    <div className="login">
    {/* {console.log("Login", login)} */}
        <h1>Login</h1>
        <br>
        </br>
        <div><label> Your Email: </label><input className="text"
        placeholder="Enter your Email"
        type="text"
        name="email"
        value={login.email}
        onChange={handlechange}></input></div>
        <br></br>
        <div>
        <label> Your Password: </label><input className="password"
        placeholder="Enter your Password"  
        type="password"
        name="password"
        value={login.password}
        onChange={handlechange}></input>
        </div>
        <br></br>
        <button className="btn"> Login</button>
    

    <div>Or</div>

    <button className="btn"> Register </button></div>
    </>
}
export default Login;