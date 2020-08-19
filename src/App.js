import React from 'react';
import Video from './VideoComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Col, Row } from 'react-bootstrap';


function App() {
  return (
    <div className='app'>
      <div className='videoSection'>
        <Video></Video>
      </div>
    </div>
  );
}

export default App;
