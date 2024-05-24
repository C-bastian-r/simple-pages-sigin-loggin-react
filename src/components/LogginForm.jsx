import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function LogginForm({ onSubmit, onChange }){
  return(
    <div className="d-flex justify-content-center align-items-center">
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Usuario</Form.Label>
          <Form.Control onChange={onChange} type="text" placeholder="Usuario" name="user"/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Contraseña</Form.Label>
          <Form.Control onChange={onChange} type="password" placeholder="contraseña" name="password"/>
        </Form.Group>
        <br/>
        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}