
import React, { useState } from 'react'
import { Form, InputGroup,Button } from 'react-bootstrap'
import Container  from '../components/CenterContainer'

const Login = ({history}) => {
const[user,setUser]=useState('')
const[password,setPassword]=useState('')
const [error,setError]=useState('')

    const LoginHandler =()=>{
        if(user==='ravi8883' && password==='Ravikumar@8883'){
        history.push('/admin')}
    else{
        setError('Invalid user')
    }}
    
    return (
        <Container>
            <Form className='shadow p-3 mb-3 rounded bg-white'>
            <h2 align='center' className='mb-3'>Login</h2>
            <h4 align='center' className='mb-3 text-danger'>{error}</h4>
            <InputGroup className='mb-3'>
            <InputGroup.Text><i className='fas fa-user'></i></InputGroup.Text>
            <Form.Control type="text" onChange={(e)=>setUser(e.target.value)} placeholder="Enter the username"></Form.Control>
            </InputGroup>
            <InputGroup className='mb-3'>
            <InputGroup.Text><i className='fas fa-lock'></i></InputGroup.Text>
            <Form.Control type="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter the password"></Form.Control>
            </InputGroup>
            <Button variant='primary' onClick={LoginHandler}>Login</Button>
            </Form>
        </Container>
    )
}

export default Login
