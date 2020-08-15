import React from 'react';
import ReactDOM from 'react-dom'
import Comments from './../Comments.jsx'

it ('comments renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Comments />, div);
});