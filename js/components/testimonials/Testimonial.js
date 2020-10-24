import { Controls } from './Controls.js';
import { CardList } from './CardList.js';

class Testimonial {
    constructor(params){
        this.selector = params.selector;
        this.data = params.data;
        this.imagesPath = params.imagesPath;
        this.maxItems = 4;
        
        this.DOM = null;
        this.cardListObj = null;
        this.controlsObj = null;
        //iskvieciama funkcija
        this.init();
    }
    
    //viena funkcija daro viena darba,init jas iskviecia
    init = () =>{
        //patikrina ar egzistuoja nurodytas selector
        //jei nera validus selector
        if(!this.isValidSelector()){
            return;
        }
        //jei taip,tuomet generuoja turini
        this.render();
        //kai sugeneruoja, prideda eventlistener
        this.cardListObj.listDOM = this.DOM.querySelector('.list');
        this.controlsObj.addEvents();

    }

    //selectoriaus validacija
    isValidSelector = () => {
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


    render = () => {
    
        const itemsCount = this.data.length > this.maxItems ? this.maxItems : this.data.length;

        this.cardListObj = new CardList({
            data: this.data,
            imagesPath: this.imagesPath,
            itemsCount: itemsCount
        });

        this.controlsObj = new Controls({
            parentDOM: this.DOM,
            itemsCount: itemsCount,
            updateSliderList: this.updateSliderList
        });
         const HTML = `<div class="slider">
         ${this.cardListObj.render()}
         ${this.controlsObj.render()}
         </div>`;

         this.DOM.innerHTML=HTML;
 
    }

    updateSliderList = (diff) => {
        this.cardListObj.shiftList(diff);
    }
}

export { Testimonial };