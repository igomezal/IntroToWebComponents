import { LitElement, html, css } from 'lit-element';

export class LitElementPlayground extends LitElement {
    constructor() {
        super();
        this.description = '';
    }

    static get properties() {
        return {
            description: {
                type: String,
            },
        };
    }

    static get styles() {
        // It supports [css]
        return css`
            :host {
                display: block;
                font-family: 'Roboto', sans-serif;
            }

            main {
                border: 1px solid black;
            }
        `;
    }

    render() {
        // It supports [html]
        return html`
            <h1>LitElement Playground</h1>
            <main>
                <section>
                    <p>${this.description}</p>
                </section>
            </main>
        `;
    }
}