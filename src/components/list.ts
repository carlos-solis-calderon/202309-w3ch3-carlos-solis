import { Component } from './components';
import { Card } from './card';
import { repo } from '../data/repo';
import { Pets } from '../model/pets';

export class List extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  manageComponent() {}

  render() {
    super.render();
    const elements = repo().map((item) => new Card('ul', item as Pets));
    console.log(elements);
  }

  createTemplate() {
    return '<ul class="Pets-list"></ul>';
  }
}
