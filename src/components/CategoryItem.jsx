import React from "react";
import styled from "styled-components";

const Container = styled.article`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  color: #fff;
  margin-bottom: 20px;
  font-size: 40px;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  font-size: 20px;
  background-color: #fff;
  color: gray;
  cursor: pointer;

  &:hover{
    color: #000;
    font-weight: bold;
  }
`;

function CategoryItem({ category }) {
  return (
    <Container>
      <Image src={category.img} alt={category.title} />
      <Info>
        <Title>{category.title}</Title>
        <Button>Ver TODO</Button>
      </Info>
    </Container>
  );
}

export default CategoryItem;
