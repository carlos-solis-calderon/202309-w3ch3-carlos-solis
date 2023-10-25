export class Main extends Component {
constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    console.log(this.element);
  }

  createTemplate() {
    return `
    <main>
      <h2>Home page</h2>
    </main>
    `;
  }
