import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { BsFillPersonFill } from 'react-icons/bs'
import { FaLock } from 'react-icons/fa'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { MdError } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()

  const [emailInput, setEmail] = useState(false)
  const [passwordInput, setPassword] = useState(true)
  const [viewPassword, setViewPassword] = useState(false)
  const [error, setError] = useState(false)

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const togglePassword = () => {
    setViewPassword(!viewPassword)
  }

  const handleEmail = () => {
    if(emailRef.current.value === ""){
      setError(true)
      return
    }
    setEmail(emailRef.current.value)
    setPassword(false)
    setError(false)
  }

  const handleLogin = () => {
    if(passwordRef.current.value === ""){
      setError(true)
      return
    }
    setPassword(passwordRef.current.value)
    setError(false)
    navigate('/tabs')
  }

  return (
    <Main>
      <div className="login">
        {!emailInput &&
          <div className='email-login'>
            <h6>Log in you Account</h6>
            <div className="input-field">
              <span className='icon'><BsFillPersonFill /></span>
              <input ref={emailRef} id='username' className='input-box' placeholder='Username or Email' type="text" />
              {/* <input ref={emailRef} id='username' onKeyUp={e=>{e.key === "Enter" && setEmail(emailRef.current.value); setPassword(false) }} className='input-box' placeholder='Username or Email' type="text" /> */}
            </div>
            {error && <div className='error'><span><MdError /></span>This field is required</div>}
            <button className='btn' onClick={handleEmail}>Continue with Email</button>
            <div className='sign-up'>
              <p>Don't have an Account ?</p>
              <Link to='/signup'><button className='btn btn-signUp'>Sign Up</button></Link>
            </div>
          </div>
        }
        {!passwordInput &&
          <div className='password-login'>
            <h6>Welcome</h6>
            <p style={{ textAlign: 'center', fontSize: '15px', marginTop: '.5rem' }}>{emailInput}</p>
            <div className="input-field" style={{ marginTop: '1rem' }}>
              <span className='icon'><FaLock /></span>
              <input ref={passwordRef} id='password' className='input-box' placeholder='Enter your Password' type={!viewPassword ? 'password' : 'text'} />
              <span className='icon view-pw' onClick={togglePassword}>{!viewPassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
            </div>
            {error && <div className='error'><span><MdError /></span>This field is required</div>}
            <div className="otherChecks" style={{ marginTop: '5px' }}>
              <div>
                <input style={{ cursor: 'pointer' }} type='checkbox' id='rememberMe' />
                <label htmlFor='rememberMe' style={{ marginLeft: '5px', cursor: 'pointer' }}>Keep me logged in</label>
              </div>
              <p className='forgotPw'>Forgot Password?</p>
            </div>
            <button className='btn' style={{marginTop: '1.5rem'}} onClick={handleLogin}>Login</button>
          </div>
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
  min-height: 90vh;
  .login{
    border: 0.1rem solid #bdb5b5;
    border-radius: 3px;
    padding: 3rem 8rem;
    .email-login > .sign-up{
      text-align: center;
      padding-top: 1rem;
      border-top: 0.1rem solid #bdb5b5;
      p{
        color: #5E6D55;
      }
      .btn-signUp{
        margin-top: 0.5rem;
        background-color: transparent;
        border: 1px solid #05ac05;
        color: #05ac05;
        :hover{
          background-color: #e6e1e16a;
        }
      }
    }
    .password-login{
      animation: right-to-left .3s ease-out forwards;
    }
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
    .error{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1px;
      color: #b92821;
      font-size: 14px; 
      height: max-content;
      span{
        font-size: 17px;
        margin: 2px 3px auto 0;
      }
    }
    .otherChecks{
      display: flex;
      justify-content: space-between;
      font-size: 14px;
      .forgotPw{
        color: green;
        cursor: pointer;
        :hover{
          text-decoration: underline;
        }
      }
    }
    .btn{
      margin: 1.2rem 0;
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
  @keyframes right-to-left {
    0%{
      transform: translateX(100%);
      opacity: 0;
    }
    50%{
      transform: translateX(50%);
      opacity: .5;
    }
    100%{
      transform: translateX(0);
      opacity: 1;
    }
  }
`