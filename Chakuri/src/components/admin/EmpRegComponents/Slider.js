import React, { Component, useState } from 'react'
import RangeSlider from 'react-bootstrap-range-slider';
import 'bootstrap/dist/css/bootstrap.css'
import {Form, Row, Col} from 'react-bootstrap';

const Slider = () => {
    const [ value, setValue ] = React.useState(0);
    return(
        <Form>
            <Form.Group as ={Row}>
                <Col xs="9">
                    <RangeSlider 
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        min={0}
                        max={10}
                        variant='success'
                    />
                </Col>
                <Col xs="2">
                    <Form.Control value={value}/>
                </Col>
            </Form.Group>
        </Form>
    );
};
export default Slider;