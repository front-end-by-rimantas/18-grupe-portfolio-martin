class CardList {
    constructor(params){
        this.DOM = params.DOM;
        this.data = params.data;
        this.imagesPath = params.imagesPath;
        this.itemsCount = params.itemsCount;
        console.log(this.itemsCount);
    }


    render(){
        let HTML = '';

        for ( let i=0; i<this.itemsCount; i++){
            const item = this.data[i];
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
}


export { CardList };