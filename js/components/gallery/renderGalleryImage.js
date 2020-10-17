//imports

// params validation

// logic

// post logic validation
  
// output
class renderGalleryImage {
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
        this.parentDOM.innerHTML += `<div class="item">ITEM: ${this.data.tags} </div>`;
        this.DOM = this.parentDOM.querySelector('.item');
    }
}

export { renderGalleryImage };
