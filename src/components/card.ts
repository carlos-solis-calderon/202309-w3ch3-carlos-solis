import { Pet } from '../model/pets';
import { Component } from './components';

export class Card extends Component {
  pet: Pet;
  constructor(selector: string, pet: Pet) {
    super(selector);
    this.pet = pet;
    this.manageComponent();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
    this.element.querySelector('#app');
  }

  createTemplate() {
    return `
  <header>hola</header>
`;
  }
}
