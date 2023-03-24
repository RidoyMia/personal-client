import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signUpcontext } from '../../Authintication/Authcontext';

const Signup = () => {
    const navigate = useNavigate()
    const{createUser} = useContext(signUpcontext)
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const[cpass,setCpass] = useState('');
    const Emailhandler = (e) =>{
        setEmail(e.target.value)
    }
    const Passhandler = (e) =>{
        setPassword(e.target.value)
    }
    const Cpasshandler = (e) =>{
        setCpass(e.target.value)
    }
    const SubmitHandler = (e) =>{
        e.preventDefault();
        if(cpass === password){
            createUser(email,password)
            .then( user =>{
                if(user){
                 navigate('/')
                }
            }).catch(e =>{
                console.log(e)
            })
        }
    }
    return (
        <div className='pt-5 mt-5'>
            <Row>
                <Col md="4"></Col>
                <Col md="4" className='bg-primary px-5 py-5 rounded'>
                    <Form onSubmit={SubmitHandler} >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           
                            <Form.Control onBlur={Emailhandler} type="email" placeholder="Enter email" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          
                            <Form.Control onBlur={Passhandler} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          
                            <Form.Control onBlur={Cpasshandler} type="password" placeholder="Confirm-Password" />
                        </Form.Group>
                       <p>Have any account? 

                       <Link className='text-dark text-left' to="/login"> login</Link><br></br>
                       </p>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Signup;