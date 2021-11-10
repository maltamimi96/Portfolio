const template = document.createElement('template');
template.innerHTML = `
<script src="/CustomComponents/navBar.js"></script>
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
  <h1>MOHAMMAD ALTAMIMI</h1>
  <nav>
      <ul class="nav-links">

          <li><a href="/About.html">About Me</a></li>
          <li><a href="#">Resume</a></li>
          <li><a href="/blogs.html">Blog</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="https://github.com/maltamimi96"><i class="fab fa-github fa-2x"></i></a></li>
          <li><a href="https://www.linkedin.com/in/mohammad-tamim-51819613a/"><i class="fab fa-linkedin fa-2x"></i></a></li>


      </ul>
  </nav>

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