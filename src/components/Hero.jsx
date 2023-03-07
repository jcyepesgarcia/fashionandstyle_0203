import React from "react";
import styled from "styled-components";
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';

const Container = styled.section`
  width: 100vw;
  height: calc(100vh - (33px + 88px));
  display: flex;
  padding: 0 15px;
  border: 1px solid;
`;

function Hero() {
  return (
    <Container>
      <>
        <ArrowLeftOutlinedIcon />
      </>
      <>
        <ArrowRightOutlinedIcon />
      </>
    </Container>
  );
}

export default Hero;
