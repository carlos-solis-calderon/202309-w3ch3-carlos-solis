import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Footer } from '../components/footer';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    document.body.innerHTML = '<div></div>';
    const footer = new Footer('div');
    test('Then it should be instance of Footer', () => {
      expect(footer).toBeInstanceOf(Footer);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByText(/Isdi/i);
      expect(element).toBeInTheDocument();
    });
  });
});
