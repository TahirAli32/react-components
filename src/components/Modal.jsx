import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillCloseCircle } from 'react-icons/ai'

const Modal = () => {

  const [modal, showModal] = useState(false)

  const handleModal =()=>{
    showModal(!modal ? true : false)
  }

  return (
    <Main>
      <button className='btn' onClick={handleModal}>Show Modal</button>
      {modal &&
        <div className='modal'>
          <div className="modalContainer">
            <div className="modalHeader">
              <p>Join Class</p>
              <span className='closeIcon' onClick={handleModal}><AiFillCloseCircle /></span>
            </div>
            <div className="modalBody">
              <h3>Class Code</h3>
              <p>Ask your teacher for the class code, then enter it here.</p>
              <div className="inputField">
                <input id='classCode' placeholder=" " className='inputBox' type="text" />
                <label for="classCode" className='inputLabel'>Class Code</label>
              </div>
            </div>
            <div className="modalFooter">
              <button className='btnJoin'>Join Class</button>
            </div>
          </div>
        </div>
      }
    </Main>
  )
}

export default Modal

const Main = styled.main`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .btn{
    font-size: 20px;
    color: white;
    padding: 10px;
    position: absolute;
    top: 150px;
    cursor: pointer;
    background: black;
  }
  .modal{
    z-index: 100;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(200, 200, 200, 0.5);
    animation: opacity 0.2s;
    .modalContainer{
      border-radius: 3px;
      background-color: white;
      border: 0.0625rem solid #e0e0e0;
      padding: 40px 35px;
      .modalHeader{
        display: flex;
        justify-content: space-between;
        padding: 0 2px 15px 2px;
        margin-bottom: 20px;
        border-bottom: 0.006rem solid #e0e0e0;
        p{
          font-size: 21px;
          font-weight: 500;
        }
        .closeIcon{
          font-size: 25px;
          cursor: pointer;
          background-color: pink;
          height: 0 !important;
          transition: all 0.1s ease-in-out;
          :hover{
            color: red;
          }
        }
      }
      .modalBody{
        padding: 5px 0;
        h3{
          font-size: 18px;
          font-weight: 400;
        }
        p{
          padding: 3px 0;
          font-size: 14px;
        }
        .inputField {
          margin: 1rem 0;
          position: relative;
          display: flex;
          border: 0.1rem solid #d6d4d4;
          border-radius: 4px;
          /* width: max-content; */
          height: 45px;
          .inputLabel {
            position: absolute;
            color: gray;
            font-size: 17px;
            top: 8px;
            padding: 0 5px;
            background: white;
            left: 10px;
            cursor: text;
            transition: all .2s;
          }
          .inputBox {
            font-size: 17px;
            border: none;
            padding: 0 1rem;
            :not(:placeholder-shown)~.inputLabel {
              top: -13px;
              font-size: 15px;
              color: #67b9c7;
            }
          }
          :focus-within, :hover {
            border-color: #67b9c7;
          }
          :focus-within .inputLabel {
            top: -13px;
            font-size: 15px;
          }
        }
      }
      .modalFooter{
        height: 10px;
        margin: 1rem 0 1.5rem 0;
        .btnJoin{
          text-transform: uppercase;
          font-size: 16px;
          width: 100%;
          background-color: transparent;
          border: 1px solid #23b0df;
          color: #23b0df;
          border-radius: 2px;
          padding: 10px;
          cursor: pointer;
          transition: all 0.2s ease-in-out;
          :hover{
            background-color: #23b0df;
            color: white;
          }
        }
      }
    }
  }
  @keyframes opacity {
    0%{
      opacity: 0;
    }
    50%{
      opacity: .5;
    }
    100%{
      opacity: 1;
    }
  }
`