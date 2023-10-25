/* eslint-disable no-new */
// document.querySelector<HTMLDivElement>('.app')!.innerHTML = `
// <h1>Holi</h1>
// `;

import { List } from './components/list';
import './scss/style.scss';

function main() {
  new List('.app');
}

main();
