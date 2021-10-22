export class AboutModal {
  private text: string = "Hellooo👋👋\n\n My name is Malik Akbar and I'm Informatics Engineering student at Institut Teknologi Bandung. This website is a single page application which is developed using TypeScript without using any framework. Anyway, you can see my social media down below at footer ^_^\n\nSee yaaa👋👋";

  constructor(
    private button: HTMLButtonElement
  ) {}

  render() {
    const modalContainer = document.getElementById('about-modal') as HTMLDivElement;
    modalContainer.classList.add('modal');
    this.button.id = "modal-btn";
    
    const div = document.createElement('div');
    div.classList.add('modal-content','animate-top');

    const span = document.createElement('span');
    span.classList.add('close');
    const i = document.createElement('i');
    i.classList.add('fa', 'fa-times-circle');
    span.append(i);
    span.onclick = function() {
      // console.log("mabar");
      modalContainer.style.display = "none";
    }
    div.append(span);

    const p = document.createElement('p');
    p.innerText = this.text;
    div.append(p);

    this.button.onclick = function() {
      // console.log("mobir");
      modalContainer.style.display = "block";
    }
    modalContainer.append(div);
  }
}