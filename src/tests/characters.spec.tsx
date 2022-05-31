import React from 'react';
import { render, RenderResult, fireEvent } from './test-utils';
import Characters from '../components/Characters';

const renderCharacters = (): RenderResult => render(<Characters />);

describe('testing characters', () => {
    beforeEach(() => {
    });
   
    it('render characters', () => {
        const {container} = renderCharacters();
        const select = container.querySelector('input');
        if (select) {
            expect(select.className).toContain('MuiSelect-nativeInput');
            fireEvent.change(select, {
                target: { value: "https://swapi.dev/api/people/1/" },
            });
            console.log(select.value);
        }
    });
});