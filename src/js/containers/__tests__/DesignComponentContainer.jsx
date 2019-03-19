import React from 'react';
import Renderer from 'react-test-renderer';

import DesignComponentContainer from '../DesignComponentContainer';

describe('# DesignComponentContainer', () => {
    describe('## constructor', () => {
        it('### should create default object', () => {
            const container = Renderer.create(<DesignComponentContainer />);
            expect(container.toJSON()).toMatchSnapshot();
        });
    });
});
