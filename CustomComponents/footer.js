class footer extends HTMLElement {
    constructor() {
        super();
        this.innerHtml =`
        
        <footer>
        <ul class="socials">
            <a href="#"><li>Facebook</li></a>
            <a href="#"><li>Instagram</li></a>
            <a href="#"><li>Github</li></a>
            <a href="#"><li>Linked-in</li></a>
        </ul>
        <h4>All Rights Reserved 2021</h4>


    </footer>
`;
    }

}
window.customElements.define('footer-comp', footer);