import React from 'react';
import Renderer from 'react-test-renderer';

import TreeViewComponent from '../TreeViewComponent';

describe('# TreeViewComponent', () => {
    describe('## constructor', () => {
        it('### should create default object', () => {
            const component = Renderer.create(<TreeViewComponent />);
            expect(component.toJSON()).toMatchSnapshot();
        });
    });
});
