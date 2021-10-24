import "./cake-item.js"

class CakeList extends HTMLElement {
    set cakes(cakes) {
        this._cakes = cakes;
        this.render();
    }

    render() {
        this._cakes.forEach(cake => {
            const cakeItemElement = document.createElement("cake-item");
            cakeItemElement.cake = cake;
            this.appendChild(cakeItemElement);
        });
    }
}

customElements.define("cake-list", CakeList);