import { homeOnClick } from "../plugin/utils.js";

export class Navbar {
  constructor(
    private container: HTMLDivElement
  ){}

  render(){
    const navbar = document.createElement('navbar');

    const button1 = document.createElement('button');
    button1.classList.add("navbar-btn");
    button1.addEventListener("click", homeOnClick);
    const h11 = document.createElement('h1');
    h11.innerText = "Home";
    button1.append(h11);
    navbar.append(button1);

    const button2 = document.createElement('button');
    button2.classList.add("navbar-btn");
    const h12 = document.createElement('h1');
    h12.innerText = "About";
    button2.append(h12);
    navbar.append(button2);

    this.container.append(navbar);
  }
}