import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from '../components/header';

describe('Given Header component', () => {
  describe('When we instantiate', () => {
    document.body.innerHTML = '<div></div>';
    const header = new Header('div');
    test('Then it should be instance of Header', () => {
      expect(header).toBeInstanceOf(Header);
    });

    test('Then it should be in the document', () => {
      const element = screen.getByText(/Animales/i);
      expect(element).toBeInTheDocument();
    });
  });
});
