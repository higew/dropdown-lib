import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Dropdown } from './lib';

const root = ReactDOM.createRoot(document.getElementById('root'));

const options = [
  {
    name: "Sales",
    key: "sal",
  },
  {
    name: "Marketing",
    key: "mar",
  },
  {
    name: "Engineering",
    key: "eng",
  },
  {
    name: "Human Ressources",
    key: "hr",
  },
  {
    name: "Legal",
    key: "leg",
  },
];

const onChange = (value) => {
  return alert(value + " is selected");
};

root.render(
  <React.StrictMode>
    <Dropdown
      options={options}
      defaultOption="Select Department"
      onChange={onChange}
    ></Dropdown>
  </React.StrictMode>
);
