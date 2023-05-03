import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Blog = () => {
    return (
        <div>
            <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What Is The Difference Between Props vs State</Accordion.Header>
        <Accordion.Body>
          <b>Props</b> is used for passing data from parent component to child component. Its only readable and can not be modified. <br />
          <b>State</b> manages data that changes. It is mutable.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>How does useState works?</Accordion.Header>
        <Accordion.Body>
          <b>useState</b> is a React hook. It returns an array with two values. The first one is the state value and the second one is function to change the first element. Let the first element is 'doSomething' which is the current state and the second element is 'setDoSomething' which one can call to update the current state. When someone calls the 'setDoSomething' with a new value, React updates the state and re-renders the component.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What does useEffect do without data loading?</Accordion.Header>
        <Accordion.Body>
          <b>useEffect</b> is a React hook that performs side effects in a component. It mainly fetches data. Other than fetching data it does : 
          <ol>
            <li>Updates document titles</li>
            <li>Handles window or document events</li>
            <li>Can be used in CSS Transmissions </li>
          </ol>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>How does react work?</Accordion.Header>
        <Accordion.Body>
            <b>React</b> is a javascript library. It used virtual dom. Because of using virtual dom it is must faster than other libraries or frameworks that doesn't use. Because of virtual dom it can use hooks like 'usetsate' and 'useeffect' that allows user to do more works faster and easier to create complex modular user interfaces.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    );
};

export default Blog;