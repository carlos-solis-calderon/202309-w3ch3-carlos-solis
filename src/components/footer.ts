import { Component } from './components';

export class Footer extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  manageComponent() {}

  render() {
    super.render();
  }

  createTemplate() {
    return '<footer>ISDI-CODERS</footer>';
  }
}
