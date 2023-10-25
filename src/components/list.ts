import { Component } from './components';
import { Card } from './card';
import { repo } from '../repo';
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
  }

  createTemplate() {
    return '<ul class="characters-list row list-unstyled"></ul>';
  }
}
