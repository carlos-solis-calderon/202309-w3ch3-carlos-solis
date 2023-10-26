import { Pet } from '../model/pets';
import { Component } from './components';

export class Card extends Component {
  petList: Pet;
  constructor(selector: string, petList: Pet) {
    super(selector);
    this.petList = petList;
    this.manageComponent();
  }

  manageComponent() {
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return `
    <div>
      <li class= "pet data"><p>${this.petList.name}</p></li>
      <li class= "pet data"><p>${this.petList.breed}</p></li>
      <li class= "pet data"><p>${this.petList.isAdopted}</p></li>
      <li class= "pet data"><p>${this.petList.owner}</p></li>
    </div>`;
  }
}
