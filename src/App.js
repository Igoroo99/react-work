import React from 'react';
import logo from './img/logo.svg';
import './css/App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import SimpleComponent from './components/SimpleComponent';
import ComplexComponent from './components/ComplexComponent';


function App() {
  
  return (
    <div className="App">
      <Header userName="Igor" />
      <SimpleComponent uber="0099" />
      <ComplexComponent  />
      <Footer userFam="Mir"/>
      
    </div>
  );
}

export default App;
