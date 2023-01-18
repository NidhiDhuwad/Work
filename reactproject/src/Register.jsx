import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CustomHook from './Hook/customHook';
import { useCookies } from 'react-cookie'
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios';
import HeaderFile from './CommonCompo/Headerfile';

const Login = () => {
    const [data, setData] = useState({});
    const [loadingStatus, setLoadingStatus] = useState(false);
    const [cookies, setCookie] = useCookies(['user']);
    const navigate = useNavigate()

    const { handleInputChange, inps, error } = CustomHook({}, {});
    let loginClick = (event) => {
        event.preventDefault();
        axios.post('http://localhost/API/register', { username: inps.username, password: inps.password })
            .then(function (result) {
                if (result.data.Data[0].role_id == 1) {
                    navigate("/login")
                } else {
                    alert("Error while inserting data try after sometime")
                    navigate("/")
                }
            }).catch(function (error) {
                alert("Error while inserting data try after sometime")
                console.log(error);
            });
    }
    return (
        <>
        <HeaderFile/>
            <div className="login-box">
                <h2>Registration</h2>
                <form>
                    <div className="user-box">
                        <input type="text" name="username" value={inps.username} onChange={handleInputChange} required />
                        <label>Username</label>
                        {/* {JSON.stringify(inps)} */}
                        {/* {JSON.stringify(error.usernameError)} */}
                        <span>{error.usernameError}</span>
                    </div>
                    <div className="user-box">
                        <input type="password" name="password" value={inps.password} onChange={handleInputChange} required />
                        <label>Password</label>
                        <span>{error.passwordError}</span>
                    </div>
                    <button onClick={loginClick}>Login</button>

                </form>
            </div>
        </>
    );
};

export default Login;