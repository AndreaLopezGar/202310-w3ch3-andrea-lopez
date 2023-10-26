import '@testing-library/jest-dom';

import { Footer } from './footer';

describe('Given Footer component', () => {
  describe('When we update the content', () => {
    const initialContent = 'Initial Content';
    const footer = new Footer('div', initialContent);

    test('It should display the initial content', () => {
      const footerElement = document.querySelector('div');
      expect(footerElement.textContent).toBe(initialContent);
    });

    const updatedContent = 'Updated Content';
    footer.updateContent(updatedContent);

    test('It should display the updated content', () => {
      const footerElement = document.querySelector('div');
      expect(footerElement.textContent).toBe(updatedContent);
    });
  });
});
