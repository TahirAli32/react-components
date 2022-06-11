import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const Login = () => {

  const [emailInput, setEmail] = useState(false)
  const [passwordInput, setPassword] = useState(true)
  const [viewPassword, setViewPassword] = useState(false)

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const togglePassword = () => {
    setViewPassword(!viewPassword ? true : false)
  }

  return (
    <Main>
      <div className="login">
        {!emailInput &&
          <>
            <h6>Log in you Account</h6>
            <div className="input-field">
              <span className='icon'><BsFillPersonFill /></span>
              <input ref={emailRef} id='username' className='input-box' placeholder='Username or Email' type="text" />
              {/* <input ref={emailRef} id='username' onKeyUp={e=>{e.key === "Enter" && setEmail(emailRef.current.value); setPassword(false) }} className='input-box' placeholder='Username or Email' type="text" /> */}
            </div>
            <button className='btn' onClick={() => { setEmail(emailRef.current.value); setPassword(false) }}>Continue with Email</button>
          </>
        }
        {!passwordInput &&
          <>
            <h6>Welcome</h6>
            <p style={{ textAlign: 'center', fontSize: '15px', marginTop: '.5rem' }}>{emailInput}</p>
            <div className="input-field" style={{ marginTop: '1rem'}}>
              <span className='icon'><FaLock /></span>
              <input ref={passwordRef} id='password' className='input-box' placeholder='Enter your Password' type={!viewPassword ? 'password' : 'text'} />
              <span className='icon view-pw' onClick={togglePassword}>{!viewPassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
            </div>
            <div className="otherChecks" style={{marginTop: '5px'}}>
              <div>
                <input type='checkbox' id='rememberMe' />
                <label htmlFor='rememberMe' style={{marginLeft: '5px'}}>Keep me logged in</label>
              </div>
              <p className='forgotPw'>Forgot Password?</p>
            </div>
            <button className='btn btn-pw' onClick={() => { setPassword(passwordRef.current.value) }}>Login</button>
          </>
        }
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
  .login{
    border: 0.1rem solid #bdb5b5;
    border-radius: 3px;
    padding: 1rem 8rem;
    min-height: 60vh;
    h6{
      font-size: 25px;
      font-weight: 600;
      text-align: center;
    }
    .input-field{
      display: flex;
      border: 0.1rem solid #d6d4d4;
      border-radius: 4px;
      width: 335px;
      height: 40px;
      margin-top: 1.5rem;
      :focus-within, :hover{
        border-color: #67b9c7;
      }
      .icon{
        margin: auto 10px;
        font-size: 18px;
        color: #5E6D55;
      }
      .view-pw{
        cursor: pointer;
        margin: auto 5px !important;
        padding: 3px 5px 0 5px;
        font-size: 20px;
        :hover{
          background-color: #a8a0a03e;
          border-radius: 50%;
        }
      }
      .input-box{
        font-size: 16px;
        border: none;
        width: 100%;
      }
    }
    .otherChecks{
      display: flex;
      justify-content: space-between;
      .forgotPw{
        color: green;
        cursor: pointer;
        :hover{
          text-decoration: underline;
        }
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