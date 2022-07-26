import React from 'react';
import './style.css';
import ContactManger from './Components/ContactManager.js';

const contacts = ['James Smith', 'Thomas Anderson', 'Bruce Wayne'];

export default function App() {
  return (
    <div>
      <h1> Contact Manager </h1>
      <ContactManger data={contacts} />
    </div>
  );
}
