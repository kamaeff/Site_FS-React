import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import firstImg from "../img/344.jpg";
import secondImg from "../img/6597434.jpg";

export default class CaruselBox extends Component {
  render() {
    return (
      <>
        <Carousel fade interval={2000}>
          <Carousel.Item style={{ height: "800px" }}>
            <img className="d-block w-100" src={firstImg} alt="firstImg" />
            <Carousel.Caption style={{ color: "black" }}>
              <h3>Построй свое будущее вместе с нами</h3>
              <p>
                Быстрая и качественная разработка, подготовленый персонал.
                Поддержка и обслуживание
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item style={{ height: "800px" }}>
            <img className="d-block w-100" src={secondImg} alt="secondImg" />
            <Carousel.Caption style={{ color: "black" }}>
              <h3>Бесплатная консультация со специалистами</h3>
              <p>Отправь запрос на консультацию сейчас!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}
