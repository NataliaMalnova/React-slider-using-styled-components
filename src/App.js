import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from 'react-bootstrap';
import styled from 'styled-components';

import Header from "./components/Header";
import Menu from "./components/Menu";
import Main from "./components/Main";

const url = process.env.PUBLIC_URL + '/img/fon.png';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`

const MenuWrapper = styled.div`
  padding: 20px;
  height: 99px;
`

const MainWrapper = styled.main`
  padding-top: 130px;
  height: 600px;
  background: url(${url}) no-repeat;
    background-size: cover;
`


function App() {
  return (
    <div className="App">
      <HeaderWrapper>
        <Container>
          <Header />
        </Container>
      </HeaderWrapper>
      <MenuWrapper>
        <Container>
          <Menu />
        </Container>
      </MenuWrapper>
      <MainWrapper>
        <Container>
        <Main />
        </Container>
      </MainWrapper>
      
    </div>
  );
}

export default App;
