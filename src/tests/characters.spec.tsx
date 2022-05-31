import React from 'react';
import { render, RenderResult } from './test-utils';
import Characters from '../components/Characters';

const renderCharacters = (): RenderResult => render(<Characters />);

test('render characters', () => {
    renderCharacters();
});