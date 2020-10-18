//imports
import { renderGalleryImage } from './renderGalleryImage.js';
// params validation

// logic

// post logic validation
  
// output
class renderGalleryImages {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.data = params.data;
        console.log('is images')
        console.log(this.data);
        this.DOM = null;

        this.init();   
    }
// ciklas konstruoja po viena boxika portfolio galerry.
//  item identifikuoja viena objektuka is data failo
    init(){
        this.render();
        for ( const item of this.data) {
            new renderGalleryImage({
                parentDOM: this.DOM,
                data: item
            });
           
        }
        

        this.addEvents();
    }
     
    addEvents(){

    }    

     render() {
        this.parentDOM.insertAdjacentHTML('beforeend', `<div class="list">LIST</div>`);
        this.DOM = this.parentDOM.querySelector('.list');
    }
}

export { renderGalleryImages };
