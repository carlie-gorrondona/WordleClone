import React, {Component} from 'react';
import {Button, Form, Container, Row, Col} from 'react-bootstrap';
import {Link, Outlet} from 'react-router-dom';
import './Wordful.scss';

export default class Wordful extends Component() {
    constructor() {
        super();
        this.state = {
            letter: '',
            hasLetter: false
        }
    }
    handleLetter(e) {
        if (this.value.length === this.maxLength) {
            (this).next('.wordfulletter').focus()
        }

        this.setState({hasLetter: true})
    }
    render() {
        return (
            <div className='wordfulwrapper'>
                <Button to='/' as={Link} className='backbutton' variant='success'>Back to Home</Button>
                <h1>Wordful</h1>
                <Form>
                    <Form.Group>
                        <Container id='content'>
                            <Row className='wordfulrow'>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxLength='1' value={this.state.letter[0][0]} />
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                            </Row>
                            <Row className='wordfulrow'>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                            </Row>
                            <Row className='wordfulrow'>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                            </Row>
                            <Row className='wordfulrow'>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                            </Row>
                            <Row className='wordfulrow'>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                            </Row>
                            <Row className='wordfulrow'>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                                <Col className='wordfulcol'>
                                    <Form.Control className='wordfulletter' type='text' maxlength='1'/>
                                </Col>
                            </Row>
                        </Container>
                    </Form.Group>
                </Form>
                <Outlet />
            </div>
        );
    }
}