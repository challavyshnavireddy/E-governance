import React from 'react';
import './Home.css';
import one from '../Images/one.jpg';
import two from '../Images/two.jpg';
import three from '../Images/three.jpg';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Home = () => {

  return (
    <Container fluid className='h'>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="image d-block w-100"
                src={one}
                alt="First slide"
              />
              <Carousel.Caption>
                <div className='t'>
                  <h3>Online Registration</h3>
                  <p>Register and Explore</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="image d-block w-100"
                src={two}
                alt="Second slide"
              />
              <Carousel.Caption>
                <div className='t'>
                  <h3>Financial Support</h3>
                  <p>Reach us here we will Reach you out there</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="image d-block w-100"
                src={three}
                alt="Third slide"
              />
              <Carousel.Caption>
                <div className='t'>
                  <h3>Grievance Redressal</h3>
                  <p>Here to help you</p>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  )
}
