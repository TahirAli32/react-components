import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa'

const Login = () => {

  const [emailInput, setEmail] = useState(false)
  const [passwordInput, setPassword] = useState(false)

  const emailRef = useRef("");
  const passwordRef = useRef("");

  // console.log(emailInput)  
  
  return (
    <Main>
      <div className="login">
        <p>Log in you Account</p>
        {!emailInput &&
          <>
            <div className="input-field">
              <span className='icon'><BsFillPersonFill /></span>
              <input ref={emailRef} id='username' className='input-box' placeholder='Username or Email' type="text" />
            </div>
            <button className='btn' onClick={() => setEmail(emailRef.current.value)}>Continue with Email</button>
          </>
        }
        {emailInput && <h1>{emailInput}</h1>}
        {!passwordInput &&
          <>
            <div className="input-field">
              <span className='icon'><FaLock /></span>
              <input ref={passwordRef} id='password' className='input-box' placeholder='Enter your Password' type="password" />
            </div>
            <div className="otherChecks" style={{marginTop: '5px'}}>
              <input type='checkbox' id='rememberMe' value="" />
              <label htmlFor='rememberMe' style={{marginLeft: '5px'}}>Keep me logged in</label>
            </div>
            <button className='btn' onClick={() => { setPassword(passwordRef.current.value) }}>Login</button>
          </>
        }
        {passwordInput && <h1>{passwordInput}</h1>}
        </div>
    </Main>
  )
}

export default Login

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  /* text-align: center; */
  .login{
    border: 0.1rem solid #bdb5b5;
    border-radius: 3px;
    padding: 1rem 8rem;
    height: 60vh;
    p{
      font-size: 25px;
      font-weight: 600;
      text-align: center;
      margin-bottom: 1.5rem;
    }
    .input-field{
      display: flex;
      border: 0.1rem solid #d6d4d4;
      border-radius: 4px;
      width: 335px;
      height: 40px;
      :focus-within, :hover{
        border-color: #67b9c7;
      }
      .icon{
        margin: auto 10px;
        font-size: 18px;
        color: #5E6D55;
      }
      .input-box{
        font-size: 16px;
        border: none;
        width: 100%;
      }
    }
    .btn{
      margin: 1.5rem 0;
      width: 100%;
      border: none;
      background-color: #05ac05;
      font-size: 17px;
      padding: 14px 0;
      border-radius: 2rem;
      color: white;
      cursor: pointer;
      :hover{
        background-color: green;
      }
    }
  } 
`