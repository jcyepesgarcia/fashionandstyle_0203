import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 33px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
`;

function Announcement() {
  return (
    <Container>
      ¡Gran oferta! Envío gratis en pedidos superiores a $ 100.000
    </Container>
  );
}

export default Announcement;
