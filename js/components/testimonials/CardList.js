class CardList {
    constructor(params){
        this.DOM = params.DOM;
        this.data = params.data;
        this.imagesPath = params.imagesPath;
        this.itemsCount = params.itemsCount;
        this.listDOM = null;

    }


    render = () => {
        let HTML = '';

        for ( let i=0; i<this.itemsCount; i++){
            const item = this.data[i];
            let photo = item.photo;
            let paragraph = item.paragraph;
            let title = item.title;
            let label = item.label;

            HTML += `<div class="item">
                    <img src="${item.photo}" alt="Photo">
                    <p>${item.paragraph}</p>
                    <h5>${item.title}</h5>
                    <label>${item.label}</label>
                    </div>`;
        }
        return `<div class="list" style="margin-left:0;">
                ${HTML}
                </div>`;
    }
    shiftList = (diff) => {
        this.listDOM.style.marginLeft = parseFloat(this.listDOM.style.marginLeft) - diff * 100 + '%';
        console.log(this.listDOM.style.marginLeft);
    }
}



export { CardList };