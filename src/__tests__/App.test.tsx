import React from 'react';
import { render } from '@testing-library/react';
import App from 'App';

describe('App Component', () => {
  test('Renders without crashing', () => {
    render(<App />);
  });
});
