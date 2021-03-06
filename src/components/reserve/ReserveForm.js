import React, { useState } from 'react';
import { Container, Row, Col, Form, InputGroup, Button } from 'react-bootstrap';

const ReserveForm = (props) => {

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
        }

        setValidated(true);
    };

    return(
        <Container fluid className="vh-100">
            <Row className="h-100 justify-content-center">
                <Col sm={10} md={8} lg={6} className="align-self-center p-5" style={{backgroundColor: "var(--theme-light)"}}>

                    <Form noValidate validated={validated} onSubmit={handleSubmit} >
                        <Form.Row>

                            <Form.Group as={Col} md="4" controlId="validationFirstName">
                                <Form.Label>First name</Form.Label>
                                <Form.Control required type="text" placeholder="First Name" />
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please enter a first name.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationLastName">
                                <Form.Label>Last name</Form.Label>
                                <Form.Control required type="text" placeholder="Last Name" />
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please enter a last name.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="4" controlId="validationEmail">
                                <Form.Label>Email</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control required type="email" placeholder="Email" />
                                    <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">Please enter an email.</Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>

                            <Form.Group as={Col} md="6" controlId="validationPhone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control required type="tel" placeholder="555-555-5555" />
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please enter an email.</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="3" controlId="validationParty">
                                <Form.Label>Party Size</Form.Label>
                                <Form.Control required as="select">
                                    <option></option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7</option>
                                    <option>8</option>
                                    <option>9</option>
                                    <option>10</option>
                                </Form.Control>
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please enter number in party</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="3" controlId="validationDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control required type="date" />
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please enter a valid date</Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="3" controlId="validationTime">
                                <Form.Label>Time</Form.Label>
                                <Form.Control required type="time" />
                                <Form.Control.Feedback type="valid">Looks good!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">Please enter a valid time</Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Check
                            required
                            label="Agree to terms and conditions"
                            feedback="You must agree before submitting."
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default ReserveForm;
