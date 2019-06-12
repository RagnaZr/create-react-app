import React from 'react';
import ReactDom from "react-dom";
import App from './app';

const contentElement = document.getElementById("content");
ReactDom.render(<App />,contentElement)