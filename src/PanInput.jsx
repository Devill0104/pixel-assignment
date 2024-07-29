import React, { useState } from 'react';

const PanInput = ()=>{

    const [pan, setPan] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isBlurred, setIsBlurred] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [name, setName] = useState('');

    const handlePanChange = (event) => {
        const panValue= event.target.value;
        setPan(panValue);
    }
    const handlePanBlur = async (event)=>{
      const panValue= event.target.value;
        const panRegime = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        const isPanValid = (panRegime.test(panValue));
        setIsValid(isPanValid);
        setIsBlurred(true);
        setIsLoading(true);
        setError('');

        //checking for the username using api call
        try {
            const response = await fetch('https://lab.pixel6.co/api/verify-pan.php', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ panNumber: panValue })
              });
      
            const data = await response.json();
      
            if (data.status === 'Success' && data.isValid) {
              setName(data.fullName);
            }else{
              setName('');
              setError('invalid pan');
              
            }
          } catch (err) {
            setError('Error verifying PAN.');
          } finally {
            setIsLoading(false);
          }
        };
        return(
            <div className="fields">
              <div className="pandetails">
                <label htmlFor="pan" className="labels">   PAN</label><br />
                <input type="text" value={pan} id="pan" placeholder="enter your PAN here"  minLength = {10} maxLength={10} onChange={handlePanChange} 
                       onBlur = {handlePanBlur} style = {{textTransform: "uppercase"}} required/><br />
                  {/* //appearance for wrong pan */}
                  {isBlurred && !isValid && pan.length === 10 && (<p className="error">Invalid PAN</p>)}
                  
              </div>
               
              <div className="nameload">
                <div className="div1">
                    <label htmlFor="name" className="labels">   Full Name</label><br />
                    <input type="text" value={name} id="name" placeholder="Name will appear here"  maxLength={140}required/><br />
                </div>
                <div className="div2">
                    {isLoading && <div className="loader"></div>}
                </div>      
              </div>
                   
    
                    
             </div>
            )
    }
    export default PanInput;

