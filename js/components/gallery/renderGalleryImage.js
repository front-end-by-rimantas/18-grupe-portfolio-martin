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
                                    <a href="#" class="plus">
                                    <img src ="${this.imagesDirectory + this.data.plus}" alt= "Image">
                                    </a>
                                    <h5 class="title">
                                        <a href="#"> ${this.data.title}</a>
                                    </h5>
                                </div>
                             </div>   
                            
                        </div>`;
        this.parentDOM.insertAdjacentHTML('beforeend', HTML);
        this.DOM = this.parentDOM.querySelector('.item');
    }
}

export { renderGalleryImage };
