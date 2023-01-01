import React from 'react'
import styled from 'styled-components'
import { BiLoaderAlt } from 'react-icons/bi'

const Loader = () => {
  return (
    <Container>
      <div className="loadingIcon"><BiLoaderAlt /></div>
      <div className="loadingText">
        <p>Loading</p>
        <div className="dots">
          <span className='dot1'></span>
          <span className='dot2'></span>
          <span className='dot3'></span>
        </div>
      </div>
      <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      <div class="lds-dual-ring"></div>
    </Container>
  )
}

export default Loader

const Container = styled.div`
  background-color: #eceaea;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & .loadingIcon{
    font-size: 3rem;
    animation: moveCircular 1.0s linear infinite ;
    & svg {
      height: 100%;
    }
  }
  & .loadingText{
    font-size: 18px;
    font-weight: 500;
    display: flex;
    & .dots{
      display: flex;
      padding-top: 6px;
      align-items: center;
      margin-left: 10px;
      & span{
        animation: appearDelay .5s ease infinite alternate;
        opacity: 1;
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background-color: transparent;
        outline: 2px solid gray;
        margin-right: 10px;
      }
      & .dot2{
        animation-delay: 0.1s;
      }
      & .dot3{
        animation-delay: 0.2s;
      }
    }
    @keyframes appearDelay {
      to{
        opacity: 0;
      }
    }
    @keyframes moveCircular{
      to{
        transform: rotate(360deg);
      }
    }
  }
  & .lds-ring{
    display: inline-block;
    position: relative;
    width: 60px;
    height: 60px;
    & div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: 40px;
      height: 40px;
      border: 4px solid #000;
      border-radius: 50%;
      animation: lds-ring 1.2s cubic-bezier(0.5, 0.0, 0.0, 0.5) infinite;
      border-color: #000 transparent transparent transparent;
      :nth-child(1) {
        animation-delay: -0.2s;
      }
      :nth-child(2) {
        animation-delay: -0.30s;
      }
      :nth-child(3) {
        animation-delay: -0.1s;
      }
    }
    @keyframes lds-ring {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  & .lds-dual-ring{
    display: inline-block;
    width: 80px;
    height: 80px;
    :after {
      content: "";
      display: block;
      width: 30px;
      height: 30px;
      margin: 5px;
      border-radius: 50%;
      border: 6px solid #000;
      border-color: #000 gray gray gray;
      animation: lds-dual-ring 1.2s infinite;
      @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
`