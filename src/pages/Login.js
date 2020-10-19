import React from 'react'
import '../assets/css/style.css'
import '../components/Banner'
import Banner from '../components/Banner'
import { Button, Form, Card } from 'react-bootstrap'

export default function Login() {
    return (
        <>
            <Banner titulo={"Login"} mensagem="Eu sou seu Pai!" />
            <Card className="card-starships--margin" style={{ width: '35%', margin: '40px 35%', padding: '10px' }}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>E-mail:</Form.Label>
                        <Form.Control type="email" placeholder="joao@gmail.com" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Senha</Form.Label>
                        <Form.Control type="password" placeholder="suasenha" />
                    </Form.Group>
                    <Button variant="primary" type="submit">Entrar</Button>
                </Form>
            </Card>
        </>
    )
}
