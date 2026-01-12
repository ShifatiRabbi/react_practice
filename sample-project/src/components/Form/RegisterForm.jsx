import React from "react";
import style from './style.module.css'
import { useState } from "react";

function RegisterForm(){

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    
    // const hanldeNameChange = (e) => {
    //     setName(e.target.value)
    // }
    // const hanldeEmailChange = (e) => {
    //     setEmail(e.target.value)
    // }
    // const hanldePasswordChange = (e) => {
    //     setPassword(e.target.value)
    // }

    const [userData, setUserData] = useState({name: "", email: "", password: ""})

    const handleFormData = (e) => {
        setUserData({...userData, [e.target.name]: e.target.value})
    }

    const hanldeFormSubmit = (e) => {
        console.log("Form Submit Successfully !!!");
        e.preventDefault();
        const formData = {
            name : userData.name,
            email : userData.email,
            password : userData.password
        }
        console.log(formData);
    }

    return(
        <div>
            <h1>Register Form</h1>
            <form action="" onSubmit={hanldeFormSubmit}>
                <div className={style.formGroup}>
                    <label> Full Name : </label>
                    <input type="text" name="name" id="name" value={userData.name} required onChange={handleFormData} />
                </div>
                <div className={style.formGroup}>
                    <label> Email : </label>
                    <input type="email" name="email" id="email" value={userData.email} required onChange={handleFormData}/>
                </div>
                <div className={style.formGroup}>
                    <label> Password : </label>
                    <input type="password" name="password" id="password" value={userData.password} required onChange={handleFormData}/>
                </div>

                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default RegisterForm