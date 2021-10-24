class CakeItem extends HTMLElement {
    set cake(cake) {
        this._cake = cake;
        this.render();
    }

    render() {
        this.innerHTML = `
            <div class="col h-100">
                <div class="card h-100">
                    <img src="${this._cake.imageCake}" class="card-img-top" height="50%" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${this._cake.title}</h5>
                        <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    </div>
                    <a href="#" class="btn btn-secondary">Go somewhere</a>
                </div>
            </div>
        `
    }
}

customElements.define("cake-item", CakeItem);