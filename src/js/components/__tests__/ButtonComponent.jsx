import React from 'react';
import Renderer from 'react-test-renderer';

import ButtonComponent from '../ButtonComponent';

describe('# ButtonComponent', () => {
    describe('## constructor', () => {
        it('### should create default object', () => {
            const component = Renderer.create(<ButtonComponent />);
            expect(component.toJSON()).toMatchSnapshot();
        });
    });
});
