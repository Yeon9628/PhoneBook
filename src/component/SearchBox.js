import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const [keyword, setKeyword] = useState('');
  const dispatch = useDispatch();
  const { contact } = useSelector((state) => state);
  
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };

  return (
    <Form onSubmit={searchByName} className='search-form'>
      <Row className='search_box'>
        <Col lg={10}>
          <Form.Control type='text' placeholder='name' onChange={(event) => setKeyword(event.target.value)} />
        </Col>
        <Col lg={2}>
          <Button variant="outline-secondary" type='submit'>Search</Button>
        </Col>
      </Row>
    </Form>
  )
}

export default SearchBox;