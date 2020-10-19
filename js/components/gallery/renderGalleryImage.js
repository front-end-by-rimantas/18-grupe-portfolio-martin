//imports

// params validation

// logic

// post logic validation
  
// output
class renderGalleryImage {
    constructor(params) {
        this.parentDOM = params.parentDOM;
        this.data = params.data;
        this.imagesDirectory = params.imagesDirectory;
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
                            <div class="image">
                                <img src ="${this.imagesDirectory + this.data.img}" alt= "Image">
                                <div class="hover">
                                    <i class="plus"></i>
                                </div>
                                <div class="title">${this.data.title}</div>
                            <div class="tags">${this.data.tags}</div>
                        </div>`;
        this.parentDOM.insertAdjacentHTML('beforeend', HTML);
        this.DOM = this.parentDOM.querySelector('.item');
    }
}

export { renderGalleryImage };
