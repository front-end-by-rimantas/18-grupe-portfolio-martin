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
         const HTML = `<div class="item">
         <img src = "#" alt= "Image">
         <div class="title"></div>
         <div class="tags"></div>
         </div>`;
        this.parentDOM.insertAdjacentHTML('beforeend', HTML);
        this.DOM = this.parentDOM.querySelector('.item');
    }
}

export { renderGalleryImage };
