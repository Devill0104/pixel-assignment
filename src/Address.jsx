import { useState } from "react";
import './style.css'
export default function Address(){

    let [address, setAddress] = useState({
        line1: '',
        line2: '',
    });

    const handleAddress = (e) =>{

        //getting the name and value of the property
        const {name,value} = e.target;

        //setting the new values
        setAddress({...address, [name]: value});
    }
    return(
        <div className="fields">
            <div className="address">
              <div className="line1">
                <label htmlFor="line1" className="labels">Address Line 1</label><br />
                <input type="text" name="line1" value={address.line1} id="line1" placeholder=" address line 1 " onChange={handleAddress} required/><br /><br />
              </div>
              <div className="line2">
                <label htmlFor="line2" className="labels">   Address Line 2</label><br />
                <input type="text"  name="line2" value={address.line2} id="line2" placeholder="address line 2" onChange={handleAddress} /><br /><br />
              </div>
            </div> 
        </div>
    )
}