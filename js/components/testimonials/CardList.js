class CardList {
    constructor(params){
        this.DOM = params.DOM;
        this.data = params.data;
        this.imagesPath = params.imagesPath;
        
        this.render();
    }


    generateHTML(){
        let HTML = '';

        for ( let item of this.data){
            let photo = item.photo;
            let paragraph = item.paragraph;
            let title = item.title;
            let label = item.label;

            HTML += `<div class="slider-list">
                    <img src="${item.photo}" alt="Photo">
                    <p>${item.paragraph}</p>
                    <h5>${item.title}</h5>
                    <label>${item.label}</label>
                    </div>`;
        }
        return `<div class="list">
                ${HTML}
                </div>`;
    }
    render(){
        this.DOM.innerHTML = this.generateHTML();
    }
}


export { CardList };