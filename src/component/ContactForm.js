import React, { useState } from 'react';
import {Form, Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();

  const createContact = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
    setName("");
    setPhoneNumber("");
  };

  return (
    <div className='form'>
      <Form onSubmit={(event) => createContact(event)}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" onChange={(event) => setName(event.target.value)} value={name} />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="number" placeholder="Phone Number" onChange={(event) => setPhoneNumber(event.target.value)} value={phoneNumber} />
        </Form.Group>
        <Button variant="outline-secondary" type="submit" className='btn'>
          Create
        </Button>
      </Form>
    </div>
  )
}

export default ContactForm;