//imports
import { renderGalleryFilterItem } from './renderGalleryFilterItem.js';
// params validation

// logic

// post logic validation
  
// output
class renderGalleryFilter {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.data = params.data;
        this.tags = [];
        this.DOM = null;
console.log(this.data);
        this.init();   
    }
// ciklas konstruoja po viena boxika portfolio galerry.
//  item identifikuoja viena objektuka is data failo
    init(){
        this.render();
        this.filterTags();

        for ( const tag of this.tags) {
            new renderGalleryFilterItem({
                parentDOM: this.DOM,
                data: tag
            });
        }
        
        this.addEvents(); 
    }

    filterTags() {
        for (const item of this.data) {
            for (const tag of item.tags){
                if (!this.tags.includes(tag)) {
                this.tags.push(tag);
                }
            }
        }
        console.log(this.tags);
    }
     
    addEvents(){

    }    

     render() {
        this.parentDOM.insertAdjacentHTML('beforeend', `<div class="filter"></div>`);
        this.DOM = this.parentDOM.querySelector('.filter');
    }
}

export { renderGalleryFilter };
