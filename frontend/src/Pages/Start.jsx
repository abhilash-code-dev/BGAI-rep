import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Start = () => {
  return (
   
    <div>
     

        <h1 id="header" >hi this is our website
        </h1>
        
        <Link to= '/Upload' ><button id="start-button"> get Started</button></Link>
        
     
    </div>
  );
}

export default Start;
