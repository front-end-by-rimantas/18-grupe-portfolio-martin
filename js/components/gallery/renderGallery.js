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
        this.imgPath = params.imgPath;
        this.defaultImg = params.defaultImg;

        // this.selectorDOM = null;
        this.DOM = null;
        this.filterObj = null;
        this.photoListObj = null;
           
        this.init();
        
    }
    init(){
        if (!this.isValidSelector()){
            return;
        }
        this.render();
    }

    
    isValidSelector() {
        const DOM = document.querySelector(this.selector);  // false -> DOM = null
        if (DOM) {
            this.DOM = DOM;
            return true;
        }
        return false;
    }

    isValidGallery() {
        return true;
    }

    generateHTML() {
        // validation
        if (!this.isValidGallery()) {
            return '';
        }

        // output
        return `<div class="filter">
                    FILTER
                </div>
                <div class="list">
                    LIST
                </div>`;
    }

    contentUpdate(tag) {
        this.photoListObj.update(tag);
    }
    render() {
        this.DOM.innerHTML = this.generateHTML();

        const filterDOM = this.DOM.querySelector('.filter');
        const listDOM = this.DOM.querySelector('.list');

        this.filterObj = new renderGalleryFilter({
            DOM: filterDOM,
            data: this.data,
            PARENT: this
        });
        this.photoListObj = new renderGalleryImages({
            DOM: listDOM,
            data: this.data,
            imgPath: this.imgPath,
            defaultImg: this.defaultImg
        });




    }
}

export { renderGallery };


/* renderGallery.js
        - renderGalleryFilter.js
               - renderGalleryFilterItem.js
        - renderGalleryImages.js
                - renderGalleryImage.js        */