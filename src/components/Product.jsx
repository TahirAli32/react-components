import React, { useState } from 'react'
import styled from 'styled-components'

const Product = () => {

  const [value, setValue] = useState(1)
  const [current, setCurrent] = useState(0)

  const imgData = ['assets/product/image1.png', 'assets/product/image2.png', 'assets/product/image3.png']

  let length = imgData.length

  const moveDots = (index) => {
    setCurrent(index)
  }

  return (
    <Container>
      <div className="product">
        <div className="gallery">
          <img src={imgData[current]} alt="image1" />
          <div className="dots">
            {Array.from({length: length}).map((item,index) => (
              <span key={index} onClick={() => moveDots(index)} className={current === index ? 'dot active' : 'dot'}></span>
            ))}
          </div>
        </div>
        <div className="details">
          <h1>Casual T-Shirt</h1>
          <h2>$15.00</h2>
          <h3>30% OFF</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, pariatur.</p>
          <form>
            <div className="sizeSelect">
              <p>Size</p>
              <label htmlFor="small">
                <input type="radio" name="size" id="small" />
                <span>S</span>
              </label>
              <label htmlFor="medium">
                <input type="radio" name="size" id="medium" />
                <span>M</span>
              </label>
              <label htmlFor="large">
                <input type="radio" name="size" id="large" />
                <span>L</span>
              </label>
              <label htmlFor="x-large">
                <input type="radio" name="size" id="x-large" />
                <span>XL</span>
              </label>
              <label htmlFor="xx-large">
                <input type="radio" name="size" id="xx-large" />
                <span>XXL</span>
              </label>
            </div>
            <div className="colorSelect">
              <p>Color</p>
              <label htmlFor="red">
                <input type="radio" name="color" id="red" />
                <span className='color-1'></span>
              </label>
              <label htmlFor="green">
                <input type="radio" name="color" id="green" />
                <span className='color-2'></span>
              </label>
              <label htmlFor="blue">
                <input type="radio" name="color" id="blue" />
                <span className='color-3'></span>
              </label>
              <label htmlFor="pink">
                <input type="radio" name="color" id="pink" />
                <span className='color-4'></span>
              </label>
            </div>
            <div className="quantitySelect">
              <p>Quantity</p>
              <input type="number" onChange={(e) => {setValue(e.target.value)}} value={value} />
            </div>
            <button>Add to Cart</button>
          </form>
        </div>
      </div>
    </Container>
  )
}

export default Product

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #d0eaff;
  display: flex;
  align-items: center;
  margin-top: -10vh; /* Just to show Navbar, while in real use, remove it */
  justify-content: center;
  .product{
    width: 90%;
    max-width: 750px;
    display: flex;
    .gallery{
      flex-basis: 47%;
      position: relative;
      background: #241e20;
      transform: scale(1.08);
      box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
      img{
        width: 100%;
        display: block;
        padding-top: 100px;
      }
      .dots{
        position: absolute;
        bottom: 40px;
        right: 20px;
        .dot{
          display: block;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          margin: 10px;
          cursor: pointer;
        }
        .active{
          background: #553ff0;
        }
      }
    }
    .details{
      flex-basis: 53%;
      background-color: #fff;
      padding: 40px;
      padding-left: 60px;
      box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
      font-size: 13px;
      font-weight: 500;
      color: #777;
      h1{
        color: #333;
        font-size: 15px;
      }
      h2{
        color: #555;
        font-size: 30px;
        font-weight: 600;
      }
      h3{
        color: #00d8cd;
        margin-bottom: 20px;
      }
    }
    form{
      font-size: 15px;
      font-weight: 400;
      .sizeSelect{
        display: flex;
        align-items: center;
        margin-top: 50px;
        p{
          width: 70px;
        }
        input:checked + span{
          color: blue;
          font-weight: 600;
        }
        input{
          display: none;
        }
        span{
          padding: 5px;
          margin-right: 10px;
          cursor: pointer;
        }
      }
      .colorSelect{
        display: flex;
        align-items: center;
        margin-top: 20px;
        p{
          width: 75px;
        }
        span{
          display: inline-block;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          margin-right: 15px;
          cursor: pointer;
        }
        input{
          display: none;
        }
        .color-1{
          background-color: red; 
        }
        .color-2{
          background-color: #00d874; 
        }
        .color-3{
          background-color: blue; 
        }
        .color-4{
          background-color: pink; 
        }
        input:checked + span{
          transform: scale(0.7);
          box-shadow: 0 0 0 3px #fff, 0 0 0 5px #747272;
        }
      }
      .quantitySelect{
        display: flex;
        align-items: center;
        margin-top: 20px;
        p{
          width: 75px;
        }
        input{
          background: #eee;
          border: 0;
          outline: 0;
          padding: 2px 2px 2px 10px;
          width: 35px;
          border-radius: 12px;
        }
      }
      button{
        background: #553ff0;
        color: #fff;
        font-size: 17px;
        width: 100%;
        padding: 10px;
        border-radius: 30px;
        border: 0;
        outline: 0;
        margin-top: 50px;
        box-shadow: 0 10px 10px rgba(85, 63, 240, 0.25);
        cursor: pointer;
      }
    }
  }
`