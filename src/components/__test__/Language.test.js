import React from 'react';
import ReactDOM from 'react-dom'
import Language from './../Language.jsx'
import renderer from 'react-test-renderer'

it ('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Language />, div);
});

it ('matches snapshot', () => {
    const tree = renderer.create(
        <Language/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
})