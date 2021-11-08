const template = document.createElement('template');
template.innerHTML = `
  <style>

  header {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: center;
    background-color: #222;
    padding-top: 40px;

}

ul {
    display: flex; 
    flex-wrap: wrap;
    justify-content: space-evenly;
   

}

li {
    
    list-style: none;
    font-size: 25px;
    margin-left:10px;
    margin-right:10px;
    

    

}
a{
    font-weight: 500;
    color: rgb(228, 220, 220);

text-decoration: none;
}

  </style>
  <header>

  <a href="#"><img src="/Resources/images/mylogo.png" width="250" height="100"> </a>
  <nav>
      <ul class="nav__links">
          <li><a href="#">About Me</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
          
     
      </ul>
  </nav>

  <ul>
      <li><img src="/Resources/images/github.svg" width="100" height="40"></li>
      <li><img src="/Resources/images/linkedin-square.svg" width="100" height="40"></li>
      <i class="fab fa-github"></i>


      
  </ul>

</header>


`;

class navBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.innerHtml = 'NaVBAR';
    }

}
window.customElements.define('nav-bar', navBar);