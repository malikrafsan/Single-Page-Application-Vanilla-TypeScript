import { homeOnClick } from "../plugin/utils.js";
import { AboutModal } from "./AboutModal.js";

export class Navbar {
  constructor(
    private container: HTMLDivElement
  ){}

  render(){
    const navbar = document.createElement('navbar');
    navbar.classList.add('navbar', 'animate-top');

    const button1 = document.createElement('button');
    button1.classList.add("navbar-btn");
    button1.addEventListener("click", homeOnClick);
    button1.innerText = "Home";
    navbar.append(button1);

    const button2 = document.createElement('button');
    button2.classList.add("navbar-btn");
    button2.innerText = "About";

    const aboutModal = new AboutModal(button2);
    aboutModal.render();

    navbar.append(button2);
    const clearer = document.createElement('div');
    clearer.classList.add('clearer');

    this.container.append(navbar);
    this.container.append(clearer);
  }
}