import React from 'react';
import renderer from 'react-test-renderer'

import { Search } from '../Search';

describe('Search', () => {
    test('should have snapshot', () => {
        const component = renderer.create(<Search>Search...</Search>);

        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})