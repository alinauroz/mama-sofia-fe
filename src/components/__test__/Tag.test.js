import React from 'react';
import ReactDOM from 'react-dom'
import Tag from './../Tag.jsx'
import {render} from '@testing-library/react';

it ('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Tag value="onion" />, div);
});

it ('renders with correct text', () => {
    const {getByTestId} = render(<Tag value='onion' />);
    expect(getByTestId('tag')).toHaveTextContent('onion');
})