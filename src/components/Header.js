import React, {Component} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

import Link from './Link';

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    height: 49px;s
`

class Header extends React.Component{
    render(){
        return(
            <Row>
                <Col lg={12}>
                    <nav>
                        <ul>
                            <List>
                                <Link link="#" text="Вызова мастера"/>
                                <Link link="#" text="Прайс на ремонт"/>
                                <Link link="#" text="Наши преимущества"/>
                                <Link link="#" text="Схема работы"/>
                                <Link link="#" text="Отзвы клиентов"/>
                                <Link link="#" text="Примеры работ"/>
                                <Link link="#" text="Контакты"/>
                            </List>
                        </ul>
                    </nav>
                </Col>
            </Row>
        )
    }
}
export default Header;