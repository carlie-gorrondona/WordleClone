import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import {Card, Button} from 'react-bootstrap';
import './Home.scss';

export default function Home() {
    return(
        <div className='homewrapper'>
            <Card className='wordfulcard' style={{ width: '18rem' }}>
                <Card.Img variant="top" className='wordfulimage' src="https://images.unsplash.com/photo-1461958508236-9a742665a0d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" />
                <Card.Body>
                    <Card.Title className='cardtitle'>Wordful</Card.Title>
                    <Card.Text>
                    </Card.Text>
                    <Button className='playbutton' to='/wordful' as={Link} variant="primary">Play</Button>
                </Card.Body>
            </Card>
            <Outlet />
        </div>
    );
}