import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import bg from '../Assets/main.jpg';
import './Pcss/start.css';
import hug from '../Assets/hugpic.png';

import pic from '../Assets/pic2.jpg';

const Start = () => {
  return (

  <div className="container"
  style={{ backgroundImage: `url(${bg})` }}>
      

<div id="start-div">

      <div id='heading'>
        <h1 >MAGICAI BACKGROUND</h1>
         
      </div>

      <div className='center-content'>
        <p id='para'>"Hi, welcome to MAGIC AI BACKGROUND Website, this our first website of our organisation and we hope that you like it,
                               
        </p>
         <p id="thankyou">Thank You</p>
      </div>
    </div>

<div id='pics'>

 <div id='hug'>
       <img src={hug} alt="picture" width="400" />
   </div>
   
      <div id='start-div-button'>
        <Link to="/Upload">
          <button id="start-button">Get Started</button>
        </Link>
        <p>copyright claim authurization verified</p>
        
      </div>
      <div id='pic2'>
       <img id='pic-round' src={pic} alt="picture" width="400" />

   </div>

</div>
   
   
    </div>
  
  
  
    
  );
};

export default Start;
