import React from 'react';
import {Col, Row} from 'react-bootstrap';
import Header from './Header/Header';
import Dashboard from './BodyLeft/Dashboard';
import Upload from './BodyLeft/Upload';
import './App.css';

const CLASS = 'sv-Main';
function App() {
  return (
    <div className="App">
      <Header/>
      <Row className={CLASS}>
        <Col md={10} className={CLASS+'-left'}>
          <Dashboard/>
          <Upload/>
        </Col>
        <Col md={2} className={CLASS+'-right'}>
        </Col>
      </Row>
    </div>
  );
}

export default App;
