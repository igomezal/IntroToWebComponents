class MyCustomElementWithoutTemplate extends HTMLElement {
    constructor() {
        super();

        console.log('The constructor is called');

        // Without using template
        const p = document.createElement('p');
        p.innerText = `This is my web component without using template`;
        p.classList = ['my-class'];

        const style = document.createElement('style');
        style.textContent = `
            .my-class {
                background: black;
                color: white;
                min-height: 70px;
                border-radius: 10px;
                text-align: center;
                font-family: 'Roboto', sans-serif;
            }
        `;

        // Without shadowRoot the web component can also be used but the styles will be not scoped
        // this.appendChild(p);


        // Using shadowRoot allow us to scope our elements so that we don't get our styles overridden by other style
        // Create shadowRoot
        const shadow = this.attachShadow({mode: 'open'});

        // Append elements to the shadowRoot
        shadow.appendChild(style);
        shadow.appendChild(p);
    }
    
    connectedCallback() { // It is invoked each time this element is appended into the DOM (document element)
        console.log('The connectedCallback is called');
    }

    disconnectedCallback() { // It is invoked each time this element is removed from the DOM (document element)
        console.log('The disconnectedCallback is called');
    }

    adoptedCallback() { // It is invoked each time this element is moved from one document element to another (from one iframe to another)
        console.log('The adoptedCallback is called');
    }

    attributeChangedCallback(name, oldValue, newValue) { // Invoked when an observed attribute is changed
        console.log('The attributeChangedCallback is called');
        console.log('Changed:', name, oldValue, newValue);
    }

    static get observedAttributes() { // Return the list of attributes to be observed
        return [];
    }
}

customElements.define('my-custom-element-without-template', MyCustomElementWithoutTemplate);