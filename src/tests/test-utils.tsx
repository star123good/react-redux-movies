import React, {FC, ReactElement} from 'react';
import {render, RenderOptions} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';

const AllTheProviders: FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, {wrapper: AllTheProviders, ...options});

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  }),
) as jest.Mock;

export * from '@testing-library/react';
export {customRender as render}