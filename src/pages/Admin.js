import React, { useState } from 'react';
import { render } from 'react-dom';
//import logo from './logo.svg';
import '../pages/Admin.css';

const Admin = () => {
    const [login, setLogin] = useState([]);
    return(
   <div>
       <marquee behavior="scroll" direction="left"><img src="https://miro.medium.com/max/2048/1*bA5tEi6SKCZxvA_3xzSNIQ.gif" width="94" height="88" alt="Swimming fish" /></marquee>
 
     <form className="button1" action="\result">
         <input  type="submit" value="View Result"></input>
     </form>
     <form action="\addmember">
        <input className="button2" type="submit" value="Add Members"></input>
     </form>
     </div>
    )

}
export default Admin;