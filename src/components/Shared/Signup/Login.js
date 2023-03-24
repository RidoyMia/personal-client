import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { signUpcontext } from '../../Authintication/Authcontext';

const Login = () => {
    const navigate = useNavigate()
    const {signIn} = useContext(signUpcontext)
        const [email,setEmail] = useState('');
        const[password,setPassword] = useState('');
        const emailhandler = (e)=>{
            setEmail(e.target.value)
        }
        const passwordhandler = (e)=>{
            setPassword(e.target.value)
        }
        const loginSubmit = (e)=>{
            e.preventDefault()
            signIn(email,password)
            .then(user =>{
                console.log(user)
                if(user){
                     navigate('/')
                }
            }).catch(e =>{
                console.log(e)
            })
        }

    return (
        <div className=' py-5 mt-5'>
            <Row>
                <Col md="4"></Col>
                <Col md="4" className='bg-primary px-5 py-5 rounded'>
                    <Form onSubmit={loginSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                           
                            <Form.Control onBlur={emailhandler} type="email" placeholder="Enter email" />
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                          
                            <Form.Control onBlur={passwordhandler} type="password" placeholder="Password" />
                        </Form.Group>
                       <p>Are you new? 

                       <Link className='text-dark text-left' to="/signup"> Signup</Link><br></br>
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

export default Login;