import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ContactItem = ({ item }) => {
  return (
    <div className='contact-item'>
      <Row>
        <Col lg={2}>
          <img className='profile' src='https://cdn-icons-png.flaticon.com/512/1361/1361876.png' />
        </Col>
        <Col lg={10}>
          <div className='name'>{item.name}</div>
          <div className='phone_number'>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem;