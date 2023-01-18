import React from 'react';
import { useCookies } from 'react-cookie';

function Dashboard(props) {
    const [cookies, setCookie] = useCookies(['user']);
    console.log(cookies.userName);
    return (
        <>
            <h2>Welcome {cookies.userName}</h2>  
        </>
    );
}

export default Dashboard;