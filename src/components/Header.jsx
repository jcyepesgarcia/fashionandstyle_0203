import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../assets/img/logo.png";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = styled.header`
  height: 88px;
`;

const Wrapper = styled.div`
  height: 100%;
  max-width: 1640px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Lado izquierdo
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  // font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  font-size: 16px;
  border: none;
  &:focus {
    outline: none;
  }
`;

// Centro
const Center = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  display: block;
  width: 120px;
  max-width: 100%;
  margin: 0 auto;
`;

// Lado derecho
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 10px;
`;

const MenuItem = styled.div`
  // font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

function Navbar() {
  return (
    <Header>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Buscar" />
            <SearchIcon
              style={{ cursor: "pointer", color: "gray", fontSize: "18px" }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo src={logo} alt="f&s Logo" />
        </Center>
        <Right>
          <MenuItem>Registrarse</MenuItem>
          <MenuItem>Iniciar Sesión</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Header>
  );
}

export default Navbar;
