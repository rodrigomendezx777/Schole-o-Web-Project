"use client"

import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #007bff;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 24px;
`;

const Nav = styled.nav`
  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>Scholeío</Logo>
      <Nav>
        <a href="#">Início</a>
        <a href="#">Notas</a>
        <a href="#">Ranking</a>
        <a href="#">Mural</a>
      </Nav>
      <Profile>
        <span>Olá, Professor!</span>
        {/* Ícone ou foto de perfil */}
      </Profile>
    </HeaderContainer>
  );
};
