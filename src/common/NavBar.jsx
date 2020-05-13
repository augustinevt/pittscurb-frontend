import React from 'react';
import styled from 'styled-components';
import {
  useLocation
} from "react-router-dom";
import Logo from './Logo';

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: white;
  width: 100%;
  height: 5rem;
  box-shadow: 0rem .5rem 1rem rgba(0,0,0,0.5);

  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

export default ({ children }) => {
  const location = useLocation();

  return (
    <Container>
      <Logo color="#8D1EF8" textColor="#4C4C4C" />
      {location.pathname}
      {children}
    </Container>
  );
}