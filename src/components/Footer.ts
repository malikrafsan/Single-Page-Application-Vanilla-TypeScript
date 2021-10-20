export class Footer {
  private socmed = [
    {
      type: "instagram",
      link: "https://www.instagram.com/malikakbarrafsan/"
    },
    {
      type: "github",
      link: "https://github.com/malikrafsan"
    },
    {
      type: "linkedin",
      link: "https://www.linkedin.com/in/malik-rafsanjani/"
    }
  ]
  
  constructor(
    private container: HTMLDivElement
  ){}

  render(){
    const footer = document.createElement('footer');
    footer.classList.add('footer','animate-bottom');

    const footerIcon = document.createElement('div');
    footer.classList.add('footer-icon');
    const ul = document.createElement('ul');
    this.socmed.forEach((socmed) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = socmed.link;
      const i = document.createElement('i');
      i.classList.add('fa', `fa-${socmed.type}`);
      a.append(i);
      li.append(a);
      ul.append(li);
    })
    footerIcon.append(ul);
    footer.append(footerIcon);

    this.container.append(footer);
  }
}

