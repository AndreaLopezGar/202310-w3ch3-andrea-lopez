import { Component } from './component';
import '../css/footer.css';

export class Footer extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
  }

  createTemplate() {
    return ` 
    <footer>
      <address>ISDI - Coders</address>
    </footer>
    `;
  }
}
