import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CustomHook from './Hook/customHook';
import { useCookies } from 'react-cookie'
import { useNavigate,Link } from "react-router-dom"
import axios from 'axios';
import HeaderFile from './CommonCompo/Headerfile';

const Login = () => {
    const [data, setData] = useState({});
    const [loadingStatus, setLoadingStatus] = useState(false);
    const [cookies, setCookie] = useCookies(['user']);
    const navigate = useNavigate()

    const {handleInputChange,inps,error} = CustomHook({},{usernameError:"",passwordError:""});
    useEffect(() => {
        
    }, [])

    let loginClick = (event)=>{
        event.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: inps.username,password:inps.password })
        };
        axios.get('https://justjayapi.000webhostapp.com/login?username='+inps.username+"&password="+inps.password)
          .then(function (result) {
            console.log(result);
            // console.log(result.Data[0].id);
            // console.log(result.Data[0].role_id);
            setCookie('loginStatus',true);
            setCookie('userid',result.data.Data[0].id);
            if (result.data.Data[0].role_id == 1) {
                navigate("/admin")
            } else {
                navigate("/")
            }
          }).catch(function (error) {
            console.log(error);
          });
        // fetch("http://localhost/API/login",requestOptions).then(response => response.json()).then((result) => {
        //     // console.log(result.Data[0].id);
        //     // console.log(result.Data[0].role_id);
        //     setCookie('loginStatus',true);
        //     setCookie('userid',result.Data[0].id);
        //     if (result.Data[0].role_id == 1) {
        //         navigate("/admindahboard")
        //     } else {
        //         navigate("/")
        //     }
        //     // setData(result)
        //     // setLoadingStatus(true)
        // })
    }
    return (
        <>
        <HeaderFile/>
            <div className="login-box">
                <h2>Login</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="username" value={inps.username} onChange={handleInputChange} required/>
                            <label>Username</label>
                            {/* {JSON.stringify(inps)} */}
                            {/* {JSON.stringify(error.usernameError)} */}
                            <span>{error.usernameError}</span>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" value={inps.password} onChange={handleInputChange}  required/>
                            <label>Password</label>
                            <span>{error.passwordError}</span>
                    </div>
                    <button onClick={loginClick}>Login</button>
                    {/* <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a> */}
                    <Link to="/registration">Create new account</Link>
                </form>
            </div>
        </>
    );
};

export default Login;