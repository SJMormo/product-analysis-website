import React from 'react';
import { Accordion } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Accordion className='w-75 mx-auto mt-4' defaultActiveKey="0">
            <h1 className="text-center mb-5">Questions</h1>
            <Accordion.Item eventKey="0">
                <Accordion.Header>What is Context API?</Accordion.Header>
                <Accordion.Body>
                    The React Context API is a way for a React app to effectively produce global variables that can be passed around. Context API provides a way to pass data through the component tree without having to pass props down manually at every level. In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What is Semantic Tag?</Accordion.Header>
                <Accordion.Body>
                    A React app can use the React Context API to generate global variables that can be passed around. The Context API allows you to transmit data through the component tree without having to explicitly provide props down at each level. Props are used to send data top-down (parent to child) in a typical React application, but this might be inconvenient. Context allows components to share values like these without having to pass a prop through each level of the tree directly.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
};

export default Blogs;