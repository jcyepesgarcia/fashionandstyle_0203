import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import { categories } from "../utils/data";

const Container = styled.section`
  max-width: 1640px;
  margin: 0 auto;
  padding: 150px 15px;
  display: flex;
  justify-content: space-between;
`;

function Categories() {
  return (
    <Container>
      {categories.map((category) => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </Container>
  );
}

export default Categories;
