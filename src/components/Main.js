import React from 'react';
//import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Repair = styled.div`
    font-size: 40px;
    line-height: 50px;
    color: #ffffff;
    font-weight: 700;
    span{
        display: block;
        font-size: 24px;
        line-height: 30px;
    }
`

const LightText = styled.div`
    font-size: 18px;
    line-height: 28px;
    color: #ffffff;
    font-weight: 300;
    margin-top: 54px;
`

const CallBtn = styled.button`
    width: 245px;
    height: 64px;
    border-radius: 32px;
    background-color: #ffa14b;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
    font-weight: 400;
    margin-top: 32px;
`

class Main extends React.Component{
    render(){
        return(
           <Row>
               <Col lg={5}>
                   <Repair>
                   Качественный ремонт <span>iphone за 35 минут и гарантия 1 год</span>
                   </Repair>
                   <LightText>
                    Оставьте заявку на бесплатную диагностику без очереди,
                        и получите защитное стекло, стоимостью 1000 рублей,
                        с установкой в подарок!
                   </LightText>
                   <CallBtn>Отправить заявку!</CallBtn>
               </Col>
               <Col lg={6} lgOffset={1}>
                   
               </Col>
           </Row>
        )
    }
}
export default Main;