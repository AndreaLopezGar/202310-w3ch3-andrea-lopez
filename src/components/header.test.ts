import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';

import { Header } from './header';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    test('Then it should be in the document', () => {
      const element = screen.getByRole('heading');
      expect(element).toBeInTheDocument();
    });
  });
});
