import { Pet } from '../model/pets';
import { Component } from './component';

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
  }

  createTemplate() {
    return `
  <li>
  <p>ID: ${this.pet.id}</p>
  <p>Nombre: ${this.pet.name} Raza: ${this.pet.breed}</p>
  <p>Dueño: ${this.pet.owner}</p>
 <p>Adoptado: ${this.pet.isAdopted}</p>

  </li>`;
  }
}
