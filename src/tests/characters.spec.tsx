import React from 'react';
import { render, screen, RenderResult } from './test-utils';
import Characters from '../components/Characters';

const renderCharacters = (): RenderResult => render(<Characters />);

describe('testing characters', () => {
    beforeEach(() => {
        renderCharacters();
    })
   
    it('render characters', () => {
        screen.queryByText('[id="select-characters"]');
    })
});