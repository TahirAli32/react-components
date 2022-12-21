import { useState } from 'react'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import styled from 'styled-components'

const Carousel = () => {

  const [position, setPosition] = useState(0)

  const carouselData = [ 
    { 
      imgName: 'BMW',
      imgSrc: '/assets/cars/bmw.jpg'
    },
    { 
      imgName: 'Ford',
      imgSrc: '/assets/cars/ford.jpg'
    },
    { 
      imgName: 'Jeep',
      imgSrc: '/assets/cars/jeep.jpg'
    },
    { 
      imgName: 'Lamborghini',
      imgSrc: '/assets/cars/lambo.jpg'
    },
    { 
      imgName: 'Mercedez Benz',
      imgSrc: '/assets/cars/mb.jpg'
    },
    { 
      imgName: 'Nissan',
      imgSrc: '/assets/cars/nissan.jpg'
    },
    { 
      imgName: 'Porsche',
      imgSrc: '/assets/cars/porsche.jpg'
    },
    { 
      imgName: 'Subaru',
      imgSrc: '/assets/cars/subaru.jpg'
    },
    { 
      imgName: 'Tesla',
      imgSrc: '/assets/cars/tesla.jpg'
    },
    { 
      imgName: 'Toyota',
      imgSrc: '/assets/cars/toyota.jpg'
    },
  ]

  let length = carouselData.length

  let maxPosition = 210 * length / 2

  const nextSlide = () => {
    if(Math.abs(position) === maxPosition){
      setPosition(0)
    }
    else{
      setPosition( prev => prev - 210)
    }
  }

  const prevSlide = () => {
      if(position === 0){
          setPosition(-maxPosition)
      }
      else{
          setPosition( prev => prev + 210)
      }
  }

  return (
    <Section className='main' sliderPosition={position}>
      <div className="top">
        <p className='sliderHeading'>Carousel</p>
        <div className="arrows">
          <span className='leftArrow arrow'>
            <BsChevronLeft onClick={() => prevSlide()} />
          </span>
          <span className='rightArrow arrow'>
            <BsChevronRight onClick={() => nextSlide()} />
          </span>
        </div>
      </div>
      <div className='slider'>
        {carouselData.map((e, i) => (
          <div className="card" key={i}>
            <img src={e.imgSrc}
              width="190px"
              height="154px"
              alt="Slider Pic"
            />
            <p>{e.imgName}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default Carousel

const Section = styled.section`
  display: flex;
  flex-direction: column;
  margin: 3rem auto 0;
  max-width: 1040px;
  & .top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .sliderHeading{
      margin: 0;
      padding: 0;
      padding-left: 5px;
      font-weight: 700;
      font-size: 17px;
    }
    & .arrows{
      display: flex;
      user-select: none;
      padding-right: 5px;
      & .arrow{
        display: flex;
        align-items: center;
        cursor: pointer;
        font-size: 20px;
        margin-left: 15px;
        color: #000;
        :hover{
            color: #593CFB;
        }
      }
    }
  }
  & .slider{
    display: flex;
    align-items: center;
    margin: 1rem 0;
    padding-left: 5px;
    overflow: hidden;
    height: 220px;
    & .card{
        cursor: pointer;
        border-radius: 8px;
        overflow: hidden;
        margin-right: 20px;
        box-shadow: 0 2px 4px 0 rgb(35 31 32 / 20%), 0 0 1px 0 rgb(35 31 32 / 10%);
        min-height: 154px;
        min-width: 190px;
        transform: ${(props) => `translateX(${props.sliderPosition}px)`};
        transition: all 0.2s;
      & p{
        text-align: center;
        margin: 16px 0;
        font-size: 16px;
        font-weight: 800;
        font-family: 'Poppins', sans-serif;
        letter-spacing: 0.1px;
        line-height: 20px;
        transition: all 0.3s;
      }
      :hover p{
        color: #593CFB;
      }
    }
  }
`