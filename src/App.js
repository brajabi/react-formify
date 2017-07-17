import React, { Component } from 'react';
import MyForm from './formify.js';
import logo from './logo.svg';
import './App.css';

    
const formify = [
  {
    node: 'input',
    type: 'text',
    label: 'name',
    props: {
      style: {
        fontSize: '40px'
      }
    }
  }, 
  {
    node: 'select',
    label: 'gradee',
    options: ['one', 'two', 'three']
  }
];

class App extends Component {
  render() {
    return (
      <MyForm data={formify}></MyForm>
    );
  }
}

export default App;
