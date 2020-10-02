class MyCustomElementWithSlots extends HTMLElement {
    constructor() {
        super();

        const p = document.createElement('p');
        p.innerText = `This is part of the component, and bellow we are using a slot where you can add any element from outside`;
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

        // Create a slot with a name
        const slot = document.createElement('slot');
        slot.setAttribute('name', 'my-slot-name');

        const shadow = this.attachShadow({mode: 'open'});

        shadow.appendChild(style);
        shadow.appendChild(p);

        // And just attach it to the shadowRoot
        shadow.appendChild(slot);


        // We can use a default slot, but only one!
        // const defaultSlot = document.createElement('slot');
        // const defaultSlot2 = document.createElement('slot');

        // shadow.appendChild(defaultSlot);
        // shadow.appendChild(defaultSlot2);
    }
}

customElements.define('my-custom-element-with-slots', MyCustomElementWithSlots);