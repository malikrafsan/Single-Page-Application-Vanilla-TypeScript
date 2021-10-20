export class Footer {
  constructor(
    private container: HTMLDivElement
  ){}

  render(){
    const footer = document.createElement('footer');
    const h1 = document.createElement('h1');
    h1.innerText = "ini footer";
    footer.append(h1);
    this.container.append(footer);
  }
}