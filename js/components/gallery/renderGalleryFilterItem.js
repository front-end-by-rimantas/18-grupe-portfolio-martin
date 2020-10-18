//imports

// params validation

// logic

// post logic validation
  
// output
class renderGalleryFilterItem {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.data = params.data;
        this.DOM = null;

        this.init();   
    }

    init(){
        this.render();
        this.addEvents();
    }
     
    addEvents(){

    }    

     render() {
        this.parentDOM.insertjacentHTML('beforeend', `<div class="option">ITEM: ${this.data.title}</div>`);
        this.DOM = this.parentDOM.querySelector('.option');
    }
}

export { renderGalleryFilterItem };
