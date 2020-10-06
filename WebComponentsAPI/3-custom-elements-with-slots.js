class MyCustomElementWithSlots extends HTMLElement {
    constructor() {
        super();

        const myCustomElementTemplate = document.getElementById('my-custom-element-with-slots');
        const cloned = myCustomElementTemplate.content.cloneNode(true);
        const shadow = this.attachShadow({mode: 'open'});

        shadow.appendChild(cloned);
    }
}

customElements.define('my-custom-element-with-slots', MyCustomElementWithSlots);