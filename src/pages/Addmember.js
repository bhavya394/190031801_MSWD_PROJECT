import React, { useState } from 'react';
import { render } from 'react-dom';
//import logo from './logo.svg';
import '../pages/Addmember.css';

const Addmember = () => {
    const [login, setLogin] = useState([]);
    return(
   <div>
      <form action="\addmember1">
          <h1 className="h">Center Details</h1>
          <label for="Regestration Date">Regestration Date</label><br></br>
          <input type="date" name="rdate"></input><br></br>
          <label for="Regestration Center Code">Regestration Center Code</label><br></br>
          <input type="text" name="rcode" required ></input><br></br>
          <label for="Regestration Center Name">Regestration Center Name</label><br></br>
          <input type="text" required name="rname"></input>
          
          <h1 className="h">SECTION : A- APPLICANT'S PERSONAL DETAILS</h1><br>
          </br>
          <label for="FULL NAME">FULL NAME</label><br></br>
          <input type="text" required name="fullname"></input><br></br>
          <label for="Surname">Surname</label><br></br>
          <input type="text" required name="surname"></input><br></br>
          <label for="DateofBirth">Date of Birth</label><br></br>
          <input type="date" required name="dateofbirth"></input><br></br>
          <label for="Resendential Address">Resendential Address</label><br></br>
          <input type="text" required name="resedential address"></input><br></br>
          <label for="town">Town/City</label><br></br>
          <input type="text" required name="city"></input><br></br>

          <label for="District">District</label><br></br>
          <input type="text" required name="dictrict"></input><br></br>
          <label for="Passport">Passport Number</label><br></br>
          <input type="text"  name="passport number" placeholder="Oprional"></input><br></br>
          <input type="submit" value="Next page"></input>
      </form>
     </div>
    )

}
export default Addmember;