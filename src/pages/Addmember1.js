import React, { useState } from 'react';
import { render } from 'react-dom';
//import logo from './logo.svg';
import '../pages/Addmember.css';

const Addmember1 = () => {
    const [login, setLogin] = useState([]);
    return(
   <div>
      <form action="\sucessfull">
          <h1 className="h">SECTION:B- APPLICANT'S PARENTS & HOME TOWN DETAILS</h1>
         
          <label for="Father Full Name">Father'<s></s> Full Name</label><br></br>
          <input type="text" name="fatherfullname" required ></input><br></br>
          <label for="Mother's Full Name">Mother's Full Name</label><br></br>
          <input type="text" required name="rname"></input><br></br>
          <label for="Home Town Address">Home Town Address</label><br></br>
          <input type="text" required name="hometown address"></input><br></br>
          <label for="town">Town/City?Village</label><br></br>
          <input type="text" required name="homecity"></input><br></br>

          <label for="District">District</label><br></br>
          <input type="text" required name="homedictrict"></input><br></br>
          <h1 className="h">SECTION:C- PHYSICAL OR VISUAL IMPAIRMENT</h1>
          
          <label for="Picture">Select Picture</label><br></br>
          <input type="file" required name="picture"></input><br></br>
          <label for="Signature">Signature</label><br></br>
          <input type="file" required name="signature"></input><br></br>
         
          <input type="submit" value="Submit"></input>
      </form>
     </div>
    )

}
export default Addmember1;