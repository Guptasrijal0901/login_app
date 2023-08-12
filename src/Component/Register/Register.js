import React, {useState} from "react";
import "./Register.css";
import axios from "axios";


const Register = ()=>{

    const [ register, setregister] = useState({
        rname:"",
        number:"",
        email: "",
        password:"",
        reenterpass:""
    })

    const handlechange = e=>{
        
        const {name, value}= e.target
        // console.log(name, value)
        setregister({...register, [name]: value})
    }

    const registeruser =()=>{
    const  {rname, number, email, password, reenterpass } = register
    if (rname&& number&& email&& password &&reenterpass&& (password===reenterpass)){
    axios.post("register" , register)
    .then(res => console.log(res))
    }else {
        alert("Invalid input")
    }
    }
    
    return <>
    <div className="register">
    {/* {console.log("Register" , register)} */}
    <h1> Register Yourself </h1>
    <br></br>
    <div>
    <label> Enter Name: </label>
    <input type="text"
    placeholder="Enter your Name"  
    name="rname"  value={register.rname}
    onChange={handlechange}>
    </input>
    </div><br></br>
    <div>
    <label> Enter Number: </label>
    <input type="Number" 
    placeholder="Enter your Number" 
    name="number" 
    value={register.number}
    onChange={handlechange}></input>
    </div><br></br>
    <div>
    <label> Enter Email: </label>
    <input type="text" 
    placeholder="Enter your Email" 
    name="email" 
    value={register.email}
    onChange={handlechange}></input>
    </div><br></br>
    <div>
    <label> Enter Password: </label>
    <input type="password"
    placeholder="Enter your Password" 
    name="password" 
    value={register.password}
    onChange={handlechange}></input>
    </div><br></br>
    <div>
    <label> Re-Enter Password: </label>
    <input type="password" 
    placeholder="Re-Enter your Password"  
    name="reenterpass"  
    value={register.reenterpass}
    onChange={handlechange}></input>
    </div><br></br>
    <button className="btn"
    onClick={registeruser}> Register </button>
    </div>
    </>
}
export default Register;
