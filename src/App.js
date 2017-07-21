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
        fontSize: '20px'
      }
    },
  }, 
  {
    node: 'select',
    label: 'gradee',
    options: ['one', 'two', 'three'],
  }, 
  {
    node: 'input',
    type: 'password',
    label: 'gradee',
  },
  {
    node: 'checkbox',
    options: ['one', 'two', 'three'],
    label: 'skills',
  },
  {
    node: 'radio',
    options: ['one', 'two', 'three'],
    label: 'skills',
    name: 'sk',
  },
];

class App extends Component {
  render() {
    return (
      <MyForm data={formify}></MyForm>
    );
  }
}

export default App;
