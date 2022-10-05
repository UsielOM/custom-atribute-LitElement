import { LitElement, html } from 'lit-element';

export class MyElements extends LitElement {

    static get properties() {
        return {
            date: {
                converter: (attrValue) => {
                    if (attrValue) return new Date(attrValue);
                    else return undefined;
                }
            }

        };
    }

    render() {
            return html `
        ${
            this.date
                ? html `<p>Date is
                    <span id="datefield">${this.date.toLocaleDateString()}</span>
                </p>`
                : 'No date set'
        }
        `;
    }
}
customElements.define('my-elements', MyElements);