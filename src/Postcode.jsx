
import React, { useState } from "react";

const Postcode = () => {
  const [postcode, setPostcode] = useState('');
  const [city, setCity] = useState('');
  const [stateName, setStateName] = useState('');
  const [validPost, setValidPost] = useState(false);
  const [isPostBlurred, setIsPostBlurred] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePostcodeChange = (e) => {
    const newPost = e.target.value;
    if (/^\d{0,6}$/.test(newPost)) {
      setPostcode(newPost);
    }
  };

  const handlePostBlur = async () => {
    if (/^\d{6}$/.test(postcode)) {
      setValidPost(true);
      setIsPostBlurred(true);
      setLoading(true);

      try {
        const response = await fetch('https://lab.pixel6.co/api/get-postcode-details.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ postcode: postcode }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('API Response:', data); // Debug log

        if (data.status === 'Success') {
          setCity(data.city[0].name);
          setStateName(data.state[0].name);
          setError('');
        } else {
          setError('Invalid Post Code.');
        }
      } catch (err) {
        console.error('Fetch error:', err); // Debug log
        setError('Error verifying PostCode');
      } finally {
        setLoading(false);
      }
    } else {
      setError('Invalid Post Code.');
      setValidPost(false);
      setCity('');
      setStateName('');
    }
  };

  return (
    <><div className="fields">
        <div className="post">
          <label htmlFor="postcode" className="labels">Postcode</label><br />
          <input
            type="text"
            name="postcode"
            value={postcode}
            id="postcode"
            placeholder="postcode"
            onChange={handlePostcodeChange}
            onBlur={handlePostBlur}
            maxLength={6}
            required
          />
         
          {isPostBlurred && !validPost && <p className="error">Invalid Post Code</p>}
          <br /><br />
      </div>
      <br />
      <div className="residence">
        <div className="city">
            <label htmlFor="city" className="labels">City</label><br />
              <input
                type="text"
                name="city"
                value={city}
                id="city"
                placeholder="city"
                readOnly
                required
              /><br /><br />
        </div>
         
        <div className="state">
        <label htmlFor="stateName" className="labels">State</label><br />
          <input
            type="text"
            name="stateName"
            value={stateName}
            id="stateName"
            placeholder="state"
            readOnly
            required
          /><br /><br />

          {error && <p className="error">{error}</p>}
        </div>
          
        </div>
      </div>
    </>
      
  
   

      
  );
}
export default Postcode;