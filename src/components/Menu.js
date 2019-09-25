import React, {Component} from 'react';
//import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const Repair = styled.div`
    color: #464646;
    font-size: 18px;
    font-weight: 300;
    line-height: 22px;
`

const WorkTime = styled.div`
    font-size: 12px;
    line-height: 24px;
    color: #2a2a2a;
    font-weight: 300;
    span{
        display: block;
        color: #464646;
        font-size: 21px;
        font-weight: 700;
    }
`
const Calls = styled.div`
    font-size: 12px;
    line-height: 24px;
    color: #2a2a2a;
    font-weight: 300;
    span{
        display: block;
        color: #464646;
        font-size: 21px;
        font-weight: 700;
    }
`
const CallButton = styled.button`
    width: 173px;
    height: 45px;
    border-radius: 30px;
    background-color: #3fc7db;
    font-size: 14px;
    line-height: 22px;
    color: #ffffff;
    font-weight: 400;
    text-align: center;
`
class Adress extends React.Component{
    render(){
        return(
            <span>
                {this.props.addr}
            </span>
        )
    }
}
class TelNumber extends React.Component{
    render(){
        return(
            <span>
                {this.props.tel}
            </span>
        )
    }
}


class Menu extends React.Component{
    render(){
        return(
           <Row>
               <Col lg={3}>
                <Repair>
                Ремонт айфонов в сервисном центре и на выезде
                </Repair>
               </Col>
               <Col lg={3} lgOffset={1}>
                <WorkTime>
                    Пн-пт с 10 до 20, сб,вс с 11 до 18 
                   <Adress addr="Ленинская, 301"></Adress> 
                </WorkTime>
               </Col>
               <Col lg={3}>
                <Calls>
                    Звонки принимаются 24 часа 
                    <TelNumber tel="8 (846) 922 55 44"></TelNumber>
                </Calls>
               </Col>
               <Col lg={2}>
                <CallButton>Заказать звонок!</CallButton>
               </Col>
           </Row>
        )
    }
}
export default Menu;