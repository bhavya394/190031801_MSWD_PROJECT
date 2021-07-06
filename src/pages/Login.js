import React, { useState } from 'react';
import { render } from 'react-dom';

import '../pages/Login.css'
const Login = () => {
    const [login, setLogin] = useState([]);
    return(
        
        

	<body>
		<span >
			<a href="\">
				<img src="https://i.pinimg.com/736x/b3/cc/d5/b3ccd57b054a73af1a0d281265b54ec8.jpg" width="80px"></img>
			</a>
		</span>
    	<center>
    		<br></br><br></br><br></br>
	      	<form action="\votepage">
	           

				<table>

				    <tr>
				    	<td colspan="6" >LOGIN</td>
				  	</tr>

				  	<tr>
					    <td colspan="6">
					    	<input type="E-mail" name="mail" placeholder=" Email address" class="fit" required autofocus></input>
					    </td>
					</tr>

					<tr>
					    <td colspan="6">
					    	<input type="password" name="password" placeholder=" Password" class="fit" required></input>
					    </td>
					</tr>
					
				</table>
				 <button class="btn fit" type="Submit" >Login</button>
					
				
				
					
	    </form>
			
				
     
				 
					
  		</center>

	</body>
       
        
   
     
    )

}




export default Login;