class Testimonial {
    constructor(params){
        this.selector = params.selector;
        this.data = params.data;
        this.DOM = null;
        this.cardList = null;
        this.controls = null;
        //iskvieciama funkcija
        this.init();
    }
    
    //viena funkcija daro viena darba,init jas iskviecia
    init(){
        //patikrina ar egzistuoja nurodytas selector
        //jei nera validus selector
        if(!this.isValidSelector()){
            return;
        }
        //jei taip,tuomet generuoja turini
        this.render();
        //kai sugeneruoja, prideda eventlistener

    }

    //selectoriaus validacija
    isValidSelector(){
        //apskritai neegzistuoja
        if (this.selector === undefined){
            //throw nutraukia funkcija
            console.error('Has to have a provided selector.');
            return false;
        }
        if (typeof this.selector !== "string"){
            console.error('Selector have to be a string type.');
            return false;
        }
        if (this.selector.length === 0){
            console.error('Selector is empty.');
            return false;
        }
        const DOM = document.querySelector(this.selector);
        if (!DOM){
            console.error('Could not find HTML element.');
            return false;
        }
        this.DOM = DOM;
        return true;
    }

    render(){
        this.cardList = new CardList({
            data: this.data;
            console.log(this.data);
        });
        this.controls = new Controls();

        const HTML = `<div class="slider">
                        ${this.cardList.render()}
                        ${this.controls.render()}
                        </div>`;
        
        this.DOM.innerHTML = HTML;    
    }
}

class CardList {
    constructor(params){
        console.log(params);
    }
    render(){
        return `<div class="list">slider item</div>`;
    }
}
class Controls {
    constructor(params){
        this.currentlyActive = 0;
    }
    render(){
        return `<div class="controls">...</div>`;
    }
    showNext(step = 1){
        this.currentlyActive+=step;
    }
    showPrevious(step = 1){
        this.currentlyActive-=step;
    }
}

export { Testimonial };