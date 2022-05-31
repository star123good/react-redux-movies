import React from 'react';
import { render, screen, RenderResult } from './test-utils';
import Characters from '../components/Characters';

const renderCharacters = (): RenderResult => render(<Characters />);

test('render characters', () => {
    renderCharacters();
    expect(screen.getByText(/no user/i)).toBeInTheDocument();
});