import './App.css';
import { useEffect, useState } from "react";
import Registrattor from "./test";
import CountCard from "./components/CountCard";
import ActionsList from "./components/ActionsList";
import Context from "./Context";

function App() {
  const [count, setCount] = useState(0);
  const changeCount = (value) => {
    setCount(count + value)
  }
  const value = {
    count: count,
    changeCount: changeCount
  }
  return (
    <Context.Provider value={value}>
      <div className="countList">
        <CountCard />
        <ActionsList />
      </div>
    </Context.Provider>
  );
}
export default App;
 
export function AppRegistor() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailEror, setEmailEror] = useState('Заполните поля!');
  const [passwordEror, setPassworEror] = useState('Заполните поля!');
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    console.log('ok');
    if (emailEror || passwordEror) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailEror, passwordEror])

  const emailHandler = (event) => {
    setEmail(event.target.value)
    const regexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (!regexp.test(String(event.target.value).toLowerCase())) {
      setEmailEror('Hекорректный емайл ')

      if (!event.target.value) {
        setEmailEror('Hекорректный емайл')
      }
    } else {
      setEmailEror('')
    }
  }

  const passwordHandler = (ev) => {
    setPassword(ev.target.value)
    if (ev.target.value.length < 3 || ev.target.value.length > 12) {
      setPassworEror('Hекорректный пароль')
      if (ev.target.value) {
        setPassworEror('Hекорректный пароль')
      }
    } else {
      setPassworEror('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email': setEmailDirty(true)
        break;

      case 'password': setPasswordDirty(true)
        break;
    }
  }

  return (
    <div className='registr'>
      <form>
        <h2 className='taitl'>Sign In</h2>

        {(emailDirty && emailEror) && <div style={{ color: 'red' }}>{emailEror} </div>}
        <input className='email' onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Your Email..." /><br /> <br />

        {(passwordDirty && passwordEror) && <div style={{ color: 'red' }}>{passwordEror} </div>}
        <input className='password' onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" type="password" placeholder='Your Password...' /> <br /> <br />

        < button className='button' disabled={!formValid} type="submit"> Log In</button>
      </form>
      <Registrattor />
    </div >

  )
}

