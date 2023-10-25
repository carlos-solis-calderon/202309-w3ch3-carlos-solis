import { Pets } from '../model/pets';
import { repo } from '../repo';
import { Component } from './components';

export class Card extends Component {
  pet: Pets;
  constructor(selector: string, pet: Pets) {
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
    <li>
      <p>ID: ${this.pet.id}</p>
      <p>Nombre: ${this.pet.name} Raza: ${this.pet.breed}</p>
      <p>Dueño: ${this.pet.owner}</p>
      <p>Adoptado: ${this.pet.isAdopted}</p>

    </li>
  }`;
  }
}
repo();
