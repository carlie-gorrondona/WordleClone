import React from 'react';
import {Card, Button, Row, Col, Container} from 'react-bootstrap';
import {Link, Outlet} from 'react-router-dom';
import './Wordful.scss';

export default function Wordful () {
    return (
        <div className='wordfulwrapper'>
            <Button to='/' as={Link}>Back to Home</Button>
            <br></br>
            <br></br>
            <Container>
                <Row xs={1} md={6} className='g-4'>
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col >
                            <Card key={idx} className='lettercard'>
                                <Card.Body>
                                    <Card.Text>
                                        A
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Outlet />
        </div>
    )
}