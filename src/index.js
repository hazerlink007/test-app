import React from "react";
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client'


import Demo from './Demo';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
    <Demo />
  </React.StrictMode>
);


