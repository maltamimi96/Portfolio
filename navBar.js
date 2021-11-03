const template = document.createElement('template');
template.innerHTML = `
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Zen+Kaku+Gothic+Antique:wght@300;500;700&display=swap');
  header {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgb(246, 249, 252);
    padding-top: 40px;

}
body {
    background-color: rgb(246, 249, 252);
}

ul {
    display: flex; 
    justify-content: space-evenly;
    padding-top: 20px;

}

li {
    padding: 0px 10px;
    list-style: none;

    font-size: 25px;
    margin-right: 5px;
    color: #26282a;
    
    height: 80px;
    width: 120px;
    

}
a{
    font-weight: 500;
    color: #26282a;

text-decoration: none;
}

  </style>
  <header>

  <a href="#"><img src="/Resources/images/mylogo.png" width="250" height="100"> </a>
  <nav>
      <ul class="nav__links">
          <li><a href="#">Services</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">About</a></li>
     
      </ul>
  </nav>

  <ul>
      <li><img src="/Resources/images/github.svg" width="100" height="40"></li>
      <li><img src="/Resources/images/linkedin-square.svg" width="100" height="40"></li>


      
  </ul>

</header>
`;

class navBar extends HTMLElement {
    constructor (){
        super();
        this.attachShadow({mode:'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true) );
        
        this.innerHtml = 'NaVBAR';
    }
    
}
window.customElements.define ('nav-bar',navBar);