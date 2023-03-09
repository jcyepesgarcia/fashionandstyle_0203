import React, { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../utils/data";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";

const Container = styled.section`
  height: calc(100vh - (33px + 88px));
  display: flex;
  background-color: #f2f2f2;
  position: relative;
  overflow: hidden;
  // width: 100%;
  // height: 100vh;
  // padding: 0 15px;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #ede7e7;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 1;
  z-index: 10;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
  transition: transform 1.8s ease-out;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bgColor};
  // border: 1px solid;
`;

const ImgContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid red;
`;

const Image = styled.img`
  height: 100%;
  // border: 1px solid green;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  // border: 1px solid blue;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Description = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

function Hero() {
  const [slideIndex, setSlideIndex] = useState(0);

  function handleClick(direction) {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  }

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlinedIcon sx={{ fontSize: 40 }} />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((slide) => (
          <Slide bgColor={slide.bg} key={slide.id}>
            <ImgContainer>
              <Image src={slide.img} alt={slide.title} />
            </ImgContainer>
            <InfoContainer>
              <Title>{slide.title}</Title>
              <Description>{slide.desc}</Description>
              <Button>NO TE LO PIERDAS</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlinedIcon sx={{ fontSize: 40 }} />
      </Arrow>
    </Container>
  );
}

export default Hero;

// Me quede en el 44:28
