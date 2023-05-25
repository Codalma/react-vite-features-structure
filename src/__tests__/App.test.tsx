import React from 'react';
import { render, screen } from '@testing-library/react';

import { App } from '@/App';
describe('Scenario: rendering the application.', () => {
  describe('Given the App component', () => {
    describe('When it is rendered', () => {
      test('Then it should render the "Learn React" link', () => {
        // Arrange
        render(<App />);

        // Act
        const linkElement = screen.getByText(/React CRA/i);

        // Assert
        expect(linkElement).toBeInTheDocument();
      });
    });
  });
});
