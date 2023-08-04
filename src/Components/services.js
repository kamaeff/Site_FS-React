import React, { Component } from "react";
import {Container, TabContainer, Row, Col, Nav, Tab, Button} from "react-bootstrap";

export default class Services_list extends Component{
    render(){
        return(
            <>
                <Container style={{'margin-top':'100px'}}>
                <h3 style={{'text-align':'center'}}>Услуги</h3>
                <TabContainer id="ledt-tapc-exammple" defaultActiveKey="first">
                <Row style={{'margin-top':'50px'}}>
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column mt-2">
                        <Nav.Item>
                        <Nav.Link eventKey="first">Аналитика</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="second">Разработка БД под ключ</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">Разработка Макета</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                        <h3>Качественная Аналитика</h3>
                        <p>Неверные решения при разработке нового продукта или функции сервиса могут стоить компании репутации и денег. Чтобы этого не произошло, компании обращаются к аналитику данных. Он собирает, обрабатывает, изучает и интерпретирует данные: проводит А/B-тесты, строит модели и проверяет, как пользователи и клиенты реагируют на нововведения. Это стоит дешевле и снижает риски бизнеса.</p>
                        <Button variant="primary">Заказать</Button>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        <h3>Разработка БД под ключ</h3>
                        <p>Сделаем быстро и качественно Базу данных для вашего бизнеса</p>
                        <Button variant="primary">Заказать</Button>
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                        <h3>Разработка Макета</h3>
                        <p>Не знаете как правильно сделать макет вашей БД? Мы сделаем это за вас!</p>
                        <Button variant="primary">Заказать</Button>
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
                </TabContainer>
                </Container>
            </>
        );
    }
}
