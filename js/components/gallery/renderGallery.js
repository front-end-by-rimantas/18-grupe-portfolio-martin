//imports
import { renderGalleryImages } from './renderGalleryImages.js';
import { renderGalleryFilter } from './renderGalleryFilter.js';

// params validation

// logic

// post logic validation
  
// output

class renderGallery {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;

        this.selectorDOM = null;
        this.DOM = null;

        this.filter = null;
        this.list = null;
        console.log(this.data);
        
        this.init();
        
    }
    init(){
        if (!this.isValidSelector()){
            return;
        }
        this.render();
        
        this.filter = new renderGalleryFilter({
            parentDOM: this.DOM,
            data: this.data
        });
        this.list = new renderGalleryImages({
            parentDOM: this.DOM,
            data: this.data
        });
        this.addEvents();
    }

    isValidSelector(){
        if (typeof this.selector !== 'string'){
            console.warn('Selector should be a "string" type.');
            return false;
        }
        if (this.selector === '') {
            console.warn('Selector should not be an empty string.');
            return false;
        }
        this.selectorDOM = document.querySelector(this.selector);
        if (!this.selectorDOM) {
            console.warn('Could not find any element by given selector.');
            return false;
        }
        return true;
    }
     
    addEvents(){

    }    

     render() {
        this.selectorDOM.innerHTML = `<div class="gallery"></div>`;
        this.DOM = this.selectorDOM.querySelector('.gallery');
    }
}

export { renderGallery };


/* renderGallery.js
        - renderGalleryFilter.js
               - renderGalleryFilterItem.js
        - renderGalleryImages.js
                - renderGalleryImage.js        */