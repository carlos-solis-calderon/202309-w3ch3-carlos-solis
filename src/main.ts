/* eslint-disable no-new */
import { List } from './components/list';
import { Footer } from './components/footer';
import { Header } from './components/header';
import './scss/style.scss';

function main() {
  new Header('#app');
  new List('#app');
  new Footer('#app');
}

main();
