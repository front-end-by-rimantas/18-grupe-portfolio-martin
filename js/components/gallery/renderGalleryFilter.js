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
        this.DOM = null;

        this.init();   
    }
// ciklas konstruoja po viena boxika portfolio galerry.
//  item identifikuoja viena objektuka is data failo
    init(){
        this.render();

        for ( const item of this.data) {
            new renderGalleryFilterItem({
                parentDOM: this.DOM,
                data: item
            });
        }
        
        this.addEvents(); 
    }
     
    addEvents(){

    }    

     render() {
        this.parentDOM.insertAdjacentHTML('beforeend', `<div class="filter"></div>`);
        this.DOM = this.parentDOM.querySelector('.filter');
    }
}

export { renderGalleryFilter };
