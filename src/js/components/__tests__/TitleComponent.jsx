import React from 'react';
import Renderer from 'react-test-renderer';

import TitleComponent from '../TitleComponent';

describe('# TitleComponent', () => {
    describe('## constructor', () => {
        it('### should create default object', () => {
            const component = Renderer.create(<TitleComponent />);
            expect(component.toJSON()).toMatchSnapshot();
        });
    });
});
