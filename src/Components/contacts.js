import React, { Component } from "react";
import { Container, TabContainer, Row, Col } from "react-bootstrap";

export default class Contacts_list extends Component {
  render() {
    return (
      <>
        <Container style={{ "margin-top": "100px" }}>
          <h3 style={{ justifyContent:"center", textAlign:"center" }}>Контакты</h3>
          <Row style={{ justifyContent: "center" }}>
            <Col md="9">
              <div
                class="d-flex align-items-center"
                style={{
                  marginTop: 30,
                  justifyContent: "center",
                  textAlign:"center"
                }}
              >
                <div
                  class="flex-shrink-0"
                  style={{
                    marginRight: 50,
                    "text-align": "center",
                  }}
                >
                  <h3 style={{ "font-size": "20px", "margin-right": "30px" }}>
                    Менеджер
                  </h3>
                  <p>
                    {" "}
                    <b>Email:</b> mjYDB@ydb.ru
                  </p>
                </div>
                <div
                  class="flex-shrink-0"
                  style={{
                    marginRight: 50,
                    "text-align": "center",
                  }}
                >
                  <h3 style={{ "font-size": "20px", "margin-right": "30px" }}>
                    Менеджер
                  </h3>
                  <p>
                    <b>Email:</b> mjYDB@ydb.ru
                  </p>
                </div>
                <div
                  class="flex-shrink-0"
                  style={{
                    marginRight: 50,
                    "text-align": "center",
                  }}
                >
                  <h3 style={{ "font-size": "20px", "margin-right": "30px" }}>
                    Менеджер
                  </h3>
                  <p>
                    <b>Email:</b> mjYDB@ydb.ru
                  </p>
                </div>
                <div
                  class="flex-shrink-0"
                  style={{
                    marginRight: 50,
                    "text-align": "center",
                  }}
                >
                  <h3 style={{ "font-size": "20px", "margin-right": "30px" }}>
                    Менеджер
                  </h3>
                  <p>
                    <b>Email:</b> mjYDB@ydb.ru
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
