import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { MdError } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Signup = () => {

  const [viewPassword, setViewPassword] = useState(false)
  const [error, setError] = useState(false)

  const nameRef = useRef("");
  const emailRef = useRef("");
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const handleSignUp = () => {
    if(emailRef.current.value === ""){
      setError(true)
      return
    }
    console.log(emailRef.current.value)
    // setPassword(passwordRef.current.value)
    setError(false)
  }

  return (
    <Main>
      <div className="signup">
        <h6>Create a Free Account</h6>
        <div className="inputField">
          <input ref={nameRef} id='name' placeholder=" " className='inputBox' type="text" />
          <label for="name" className='inputLabel'>Full Name</label>
        </div>
        <div className="inputField">
          <input ref={usernameRef} id='username' placeholder=" " className='inputBox'  type="text" />
          <label for="username" className='inputLabel'>Username</label>
        </div>
        <div className="inputField">
          <input ref={emailRef} id='email' placeholder=" " className='inputBox' type="text" />
          <label for="email" className='inputLabel'>Email Address</label>
        </div>
        <div className="inputField">
          <input ref={passwordRef} style={{padding: '0 0 0 1rem'}} id='password' placeholder=" " className='inputBox' type={!viewPassword ? 'password' : 'text'} />
          <label for="password" className='inputLabel'>Password</label>
          <span className='viewPw' onClick={()=>setViewPassword(!viewPassword)}>{!viewPassword ? <AiFillEye /> : <AiFillEyeInvisible />}</span>
        </div>
        <div className='disclaimer'>
          <input type='checkbox' id='tos' />
          <label for='tos'>I agree to the Terms of Use and Privacy Policy</label>
        </div>
        <button className='btn' onClick={handleSignUp} style={{ marginTop: '1.5rem' }}>Sign Up</button>
        <p>Already have an account? <Link to="/login">Log In</Link></p>
      </div>
      {error && <div className='error'><span><MdError /></span>All fields are required</div>}
    </Main>
  )
}

export default Signup

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  .signup{
    border: 0.1rem solid #bdb5b5;
    border-radius: 3px;
    padding: 5rem 8rem;
    h6{
      font-size: 25px;
      margin-bottom: 1.5rem;
      font-weight: 600;
      text-align: center;
    }
    .inputField{
      position: relative;
      display: flex;
      border: 0.1rem solid #d6d4d4;
      border-radius: 4px;
      width: 450px;
      height: 40px;
      margin-top: 1rem;
        .inputLabel{
          position: absolute;
          color: gray;
          font-size: 17px;
          top: 6px;
          padding: 0 5px;
          background: white;
          left: 10px;
          cursor: text;
          transition: all .2s;
        }
        .inputBox{
          font-size: 16px;
          border: none;
          width: 100%;
          padding: 0 1rem;
          :not(:placeholder-shown) ~ .inputLabel{
            top: -14px;
            font-size: 15px;
          }
        }
      :focus-within, :hover{
        border-color: #67b9c7;
      }
      :focus-within .inputLabel{
        top: -14px;
        font-size: 15px;
      }
      .viewPw{
        margin: auto 10px;
        font-size: 18px;
        color: #5E6D55;
        cursor: pointer;
        margin: auto 5px !important;
        padding: 3px 5px 0 5px;
        font-size: 20px;
        :hover{
          background-color: #a8a0a03e;
          border-radius: 50%;
        }
      }
    }
    .disclaimer{
      text-align: center;
      font-weight: 500;
      letter-spacing: .2px;
      width: 445px;
      padding: 0 2px;
      margin-top: .8rem;
      font-size: 15px;
      color: #2b3958;
      label, input{
        cursor: pointer;
        padding: 0 6px;
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
    p{
      margin-top: 1.5rem;
      text-align: center;
      color: #636b6a;
      a{
        color: #05ac05;
        font-weight: 500;
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
`