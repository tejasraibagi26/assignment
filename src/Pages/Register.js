import React from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap';

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: "",
            repeat_password: "",
            errorFName: "",
            errorLName: "",
            errorEmail: "",
            errorPhone: "",
            errorPassEmp: "",
            errorPass: ""
        }


    }

    handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }

    submitHandler = () => {
        var isValid = this.validate();
        if(isValid) {
            alert('Registration Complete');
            window.location.reload();
        }
    }

    validate() {
        this.setState({
            errorFName: "",
            errorLName: "",
            errorEmail: "",
            errorPhone: "",
            errorPassEmp: "",
            errorPass: ""})

           if(!this.state.firstname) {
            this.setState({errorFName: "Required"});

           }
           if(!this.state.lastname) {
            this.setState({errorLName: "Required"});
       
           }
           if(!this.state.email.includes('@')) {
            this.setState({errorEmail: "Invalid Email"});
           }
           if(this.state.phone.length !== 10 ) {
            this.setState({errorPhone: "Incorrect Number"});
           }
           if(!this.state.password) {
               this.setState({errorPassEmp: "Password cannot be empty"});
           }
           if(this.state.password !== this.state.repeat_password || !this.state.repeat_password) {
            this.setState({errorPass: "Password does not match!"});
            return false;
           }

           return true;

        }

    render() {
        return(
            <section id="register">
                <Row xs={1} md={3} className="justify-content-center align-items-center">
                    <Col>
                        <h2 align="center" style={{marginTop: "15%"}}>
                        Register
                        </h2>
                        <Form className="login-form">
                            <Form.Row>
                            <Form.Group as={Col} controlId="formGridFname">
                            <Form.Label>
                                First Name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                className="swing-in-left-fwd"
                                placeholder="First Name"
                                name="firstname"
                                onChange={this.handleChange}
                            />
                            <p style={{color:"red"}}>{this.state.errorFName}</p>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridLname">
                            <Form.Label>
                                Last Name
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Last Name"
                                name="lastname"
                                onChange={this.handleChange}
                            />
                            <p style={{color:"red"}}>{this.state.errorLName}</p>
                            </Form.Group>
                        </Form.Row>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label >
                            Email address
                            </Form.Label>
                            <Form.Control
                            required
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            onChange={this.handleChange}
                            />
                            <Form.Text>
                            We'll never share your email with anyone else.
                            </Form.Text>
                            <p style={{color:"red"}}>{this.state.errorEmail}</p>
                        </Form.Group>
                        <Form.Group controlId="formBasicPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control
                            required
                            type="number"
                            min="0"
                            placeholder="+91..."
                            name="phone"
                            onChange={this.handleChange}
                            />
                            <p style={{color:"red"}}>{this.state.errorPhone}</p>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            name="password"
                            onChange={this.handleChange}
                            />
                            <p style={{color:"red"}}>{this.state.errorPassEmp}</p>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Repeat Password</Form.Label>
                            <Form.Control
                            type="password"
                            placeholder="Repeat Password"
                            name="repeat_password"
                            onChange={this.handleChange}
                            />
                            <p style={{color:"red"}}>{this.state.errorPass}</p>
                        </Form.Group>
                        <a
                            href="#"
                        >
                            Already have an Account?Click here to Sign In!
                        </a>
                        <p align = "center" style={{color:"red"}}>{this.state.error}</p>
                        <p align="center">
                            <Button className="form-button" onClick={this.submitHandler}>
                            Submit
                            </Button>
                        </p>
                        </Form>
                    </Col>
                </Row>
            </section>
        );
    }
}

export default Register;