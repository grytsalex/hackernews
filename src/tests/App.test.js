import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';

import App from '../App';

describe('App', () => {
    it('render without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    })

    test('should have snapshot', () => {
        const component = renderer.create(<App />)

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})