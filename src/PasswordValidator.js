import './PasswordValidator.css';
import { useEffect, useState } from 'react';


function PasswordValidator() {
  const [password, setPassword] = useState("");

  const [numErr, setNumErr] = useState("");
  const [lowerErr, setLowerErr] = useState("");
  const [upperErr, setUpperErr] = useState("");
  const [specialErr, setSpecialErr] = useState("");

  const lowerRegex = /(?=.*[a-z])/;
  const upperRegex = /(?=.*[A-Z])/;
  const specialRegex = /(?=.*[@$!%*?&#])/;

  useEffect(() => {

  // Reset all error messages
  setNumErr("");
  setLowerErr("");
  setUpperErr("");
  setSpecialErr("");
    
  if (password.length < 8) {
    setNumErr("At least 8 characters.");
    
  } 
  if (!lowerRegex.test(password)) {
    setLowerErr("At least one lowercase letter");
    
  }
  if (!upperRegex.test(password)) {
    setUpperErr("At least one uppercase letter.");
    
  } 
  if (!specialRegex.test(password)) {
    setSpecialErr("At least one special character.");
   
  }
  
  // eslint-disable-next-line
  }, [password])
  

  return (
    <div className="container">

      <header className="header__container">
        <h3>Password Validator</h3>
      </header>

      <p className="subheader__container">
        Create and validate your password below
      </p>

      <div className="input-container">
       
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

       <div className="err-container">
        {password.length >= 1 && (
          <>
            <p style={{ color: numErr ? "red" : "green" }}>
              {numErr || "At least 8 characters."}
            </p>
            <p style={{ color: lowerErr ? "red" : "green" }}>
              {lowerErr || "At least one lowercase letter."}
            </p>
            <p style={{ color: upperErr ? "red" : "green" }}>
              {upperErr || "At least one uppercase letter."}
            </p>
            <p style={{ color: specialErr ? "red" : "green" }}>
              {specialErr || "At least one special character."}
            </p>
          </>
        )}
      </div>

      <div className="success-container">
        {!numErr && !lowerErr && !upperErr && !specialErr && (
          <small className="success-msg">Password meets all requirements!</small>
        )}
      </div>

      </div>
    </div>
  );
}

export default PasswordValidator;
