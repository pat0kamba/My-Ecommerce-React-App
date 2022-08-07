import React from 'react';
import {Outlet} from "react-router-dom";
import {useEffect} from 'react';

export default function Home()
{
    useEffect(()=>{
        window.scrollTo(0,0);
    }, []);
    
    return(
        <>
        <Outlet />
        </> 
    )
}