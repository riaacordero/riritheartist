import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'
import {Button} from './page-items/Button/Button'
class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: '',
            disabled: false,
            emailSent: null
        }
    }

    handleChange = (event) => { 
        const target = event.target;
        const value = target.type === '' ? target.checked : target.value
        const name = target.name;

        this.setState({
            [name]:value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            // disables spam emails
            disabled: true,
            emailSent: false
        })
    }

    render(){
        return(
            <main className="main__bg" id="contact">
                <div className="contents flex column top-high bottom-high">
                    <h2 className="color--black par--center">Let's Talk!</h2>
                    <div className="par--center flex">
                        <p className="short--width">Connect with me through this contact form</p>
                    </div>
                    <div className="par--center flex">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label htmlFor="name">Name</Form.Label>
                                <Form.Control id="name" name="name" type="text" value={this.state.name} onChange={this.handleChange}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}></Form.Control>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label htmlFor="message">Message</Form.Label>
                                <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange}></Form.Control>
                            </Form.Group>
                            <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                                Send
                            </Button>

                            {this.state.emailSent === true && <p className="success-msg"> Email sent successfully! </p>}
                            {this.state.emailSent === false && <p className="error-msg"> Please try again! </p>}

                        </Form>
                    </div>
                    {/* INSERT FORM HERE */}
                </div>
            </main> 
        )
    }
}
export default Contact;