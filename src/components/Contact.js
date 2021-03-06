import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button } from './page-items/Button/Button';
import { FormGroup } from 'react-bootstrap';

export default function Contact() {
  const [state, handleSubmit] = useForm("mnqllvaz");
  state.submitting = false;
  
  return (
    <main className="main__bg" id="contact">
        <div className="contents flex column top-high bottom-high">
                <h2 className="color--black par--center">Let's Talk!</h2>
                <div className="par--center flex">
                    <p className="short--width">Got anything in mind? Just want to say hi? Send me a message through this contact form:</p>
                </div>
                <form className ="forms flex" onSubmit={handleSubmit}>
                    <FormGroup>
                        <div>
                            <input className="wide" id="name" placeholder="Name" type="name" name="name" required/>
                            <ValidationError prefix="Name" field="Name" errors={state.errors}/>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <input className="wide" id="email" placeholder="Email Address" type="email" name="email" required/>
                            <ValidationError prefix="Email" field="Email" errors={state.errors}/>
                        </div>
                    </FormGroup>
                    <FormGroup>
                        <div>
                            <textarea className="wide--height-overidden" id="message" placeholder="Message" name="message" required/>
                            <ValidationError prefix="Message" field="Message" errors={state.errors}/>
                        </div>
                    </FormGroup>
                    <Button type="submit" disabled={state.submitting}>submit</Button>

                    {state.succeeded === true && <p className="success-msg"> Email sent successfully! </p>}
                    
                </form>
            </div>
    </main>
  );
}
