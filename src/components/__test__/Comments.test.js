import React from 'react';
import ReactDOM from 'react-dom'
import Comments from './../Comments.jsx'
import renderer from 'react-test-renderer'

it ('comments renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Comments />, div);
});

it ('matches snapshot', () => {
    const tree = renderer.create(
        <Comments
            name="Coconut & squash dhansak"
            id = "5f35abbdf05c76200731046a"
        />
    ).toJSON();
    expect(tree).toMatchSnapshot();
})