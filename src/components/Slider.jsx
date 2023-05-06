import styled from "styled-components";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState } from "react";
import { sliderItems } from "./data";

const Container = styled.div`
    display: flex;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #f2e5e5;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props=> props.direction==="left" && "10px"};
    right: ${props=> props.direction==="right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`
const Wrapper = styled.div`
    display: flex;
    transform: translateX(-${(props)=>props.slideIndex * 100}vw);
    transition: all 1s ease-in-out;
    `
const Slide = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: #a31c1c34;

    
`
const Image = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex: 1;
    margin: 15px 0px 15px 70px;

`
const Img = styled.img`
    
`
const Info = styled.div`
    //width: 500px;
    //height: 500px;
    margin-right: 100px;
    flex: 1;
    align-items: center;
    
`
const Title = styled.h1`
    text-align: center;
    font-size: 30pt;
    
`
const Desc = styled.p`
    padding: 15px 50px;
    text-align: center;
    font-size: 15pt;
   
`
const Button = styled.button`
    margin-left: 250px;
    padding: 5px;
    background-color: #ffffff;
    font-size: 16px;
`
const Slider = () => {
    const[slideIndex, setSlideIndex]=useState(0);
    const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
};


  return (

    <Container>
        <Arrow direction="left" onClick={()=> handleClick("left")}>
            <ArrowLeftIcon/>
        </Arrow>

        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
                <Slide>

                    <Image>
                        <img src={item.img}/>

                    </Image>

                    <Info>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Button>Grab it Now!!!</Button>
                    </Info>

                </Slide>))}
        </Wrapper>

        <Arrow direction="right" onClick={()=> handleClick("right")}>
            <ArrowRightIcon />
        </Arrow>
    </Container>
  )
}

export default Slider
