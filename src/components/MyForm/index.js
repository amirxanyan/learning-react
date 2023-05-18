import React, { useState, useEffect } from 'react';
import './style.css'

function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);

  useEffect(() => {
    console.log('ok');
    setIsPasswordMatch(password === confirmPassword);
  }, [password, confirmPassword]);

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordChange = event => {
    setConfirmPassword(event.target.value);
  };
  const handleSubmit = event => {
    event.preventDefault();
  };
  return (
    <form className='registrator' onSubmit={handleSubmit}>
      <label className='username'> Username:</label>
      <input className='input' type="text" value={username} onChange={handleUsernameChange} />
      <br />
      <label className='mail'>Email:</label>
      <input className='input' type="email" value={email} onChange={handleEmailChange} />
      <br />
      <label className='pass'> Password:</label>
      <input className='input' type="password" value={password} onChange={handlePasswordChange} />
      <br />
      <label> Confirm Password:
        <input className='input' type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </label>{!isPasswordMatch && <p>Passwords do not match</p>}
      <br />
      <button className='butt' type="submit" disabled={!isPasswordMatch}>Sign up</button>
    </form>
  );
}
export default SignupForm;