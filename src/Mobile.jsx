import { useState } from "react";
import './style.css'
export default function Mobile(){

    let [mobile, setMobile] = useState('');
    let [email, setEmail] = useState('');

    const handleEmail = (e) =>{
        const newValue = e.target.value;
        setEmail(newValue);
    }

    const handleMobile = (e) =>{
        const newValue = e.target.value;
        if(/^\d{0,10}$/.test(newValue)){
            setMobile(newValue);
        }
        
        
            
    }
    return(
        <div className="fields">
            <div className="contact">
                <div className="mobile">
                  <label htmlFor="mobile" className="labels">   Mobile No.</label><br />
                    <span className="pre">+91</span>
                    <input type="text" value={mobile} id="mobile" placeholder="enter your mobile no. here" maxLength={10}
                       onChange={handleMobile} minLength={10} required/><br />
                </div>
                <div className="email">
                     <label htmlFor="email" className="labels elabel">   Email </label><br />
                     <input type="email" value={email} id="email" placeholder="enter your email here" maxLength={255} onChange={handleEmail} required/><br />
                </div>
            </div>
        </div>
            
    )
}