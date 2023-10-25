import { Component } from './component';
import '../css/header.css';

export class Header extends Component {
  constructor(selector: string) {
    super(selector);

    this.template = this.createTemplate();
    this.render();
  }

  render() {
    super.render();
  }

  createTemplate() {
    return ` 
    <header>
      <h1>Pets</h1>
    </header>
    `;
  }
}
