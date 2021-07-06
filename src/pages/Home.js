import React, { useState } from 'react';
import { render } from 'react-dom';
//import logo from './logo.svg';
import '../pages/Home.css';

const Home = () => {
    const [login, setLogin] = useState([]);
    return(

            
        
        
        <body>
        
            <div class="super_top">
                <ul>
                    <li class="site_heading "></li>
                    <a href="" target="_blank"></a>
                        <li class="hand" >
                           
                        </li>
                   
                </ul>
            </div>
        
            <div class="strip">
                <ul class="super_top" >
                <marquee behavior="scroll" className="scroll" direction="left">HTML marquee...</marquee>
                    
                    <a href="\Login">
                        <button class="hand btn" >Voter Login</button>
                    </a>
                    <br></br>
                    <a href="\Adminlogin" target="_blank" >
                        <button class="hand btn" >Admin Login</button>
                    </a>
                        
                </ul>
            </div>
        
            </body>
     
    )

}
export default Home;