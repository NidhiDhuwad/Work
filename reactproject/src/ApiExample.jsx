import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import HeaderFile from './CommonCompo/Headerfile';

const ApiExample = () => {
    const [data, setData] = useState({});
    const [loadingStatus, setLoadingStatus] = useState(false);
    useEffect(() => {
        fetch("https://justjayapi.000webhostapp.com/allusers").then(response => response.json()).then((result) => {
            console.log(result);
            setData(result.Data)
            setLoadingStatus(true)
        })
    }, [])
    return (
        <>

            <HeaderFile />
            test
            {
                loadingStatus ?
                    Object.entries(data).map((val, key) => { //data.map is not a function
                        // console.log( "Values is: ", val);
                        // console.log( "Values is: ", val[0]);
                        // console.log( "Values is: ", );
                        // console.log( "Values is: ", val[1].title);
                        // console.log( "key is: ", key);
                        return <div key={key}><p><li>{val[1].username}</li></p></div>
                    }) : "Loading..."
            }
            <li>test</li>
        </>
    );
};

export default ApiExample;