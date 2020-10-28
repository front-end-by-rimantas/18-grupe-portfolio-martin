//imports
import { URL } from '../../utils/URL.js';
//import { renderGalleryImage } from './renderGalleryImage.js';
// params validation

// logic

// post logic validation
  
// output
class renderGalleryImages {
    constructor(params) {
        this.DOM = params.DOM;
        this.data = params.data;
        this.imgPath = params.imgPath;
        this.defaultImg = params.defaultImg;
        
        this.photosDOM = null;

        this.init();   
    }
// ciklas konstruoja po viena boxika portfolio galerry.
//  item identifikuoja viena objektuka is data failo
    init(){
        this.render();
                  
        }
        generateHTML() {
            let HTML = '';
            const defaultImg = URL.baseURL() + this.imgPath + this.defaultImg;
           
    
            for (let item of this.data) {
                // let imgAlt = item.imgAlt;
                // if (!imgAlt) {
                //     imgAlt = `${item.name} project screenshot`;
                // }
                let title = item.title;
                     HTML += `<div class="item">
                            <div class="image">
                              <img src="${URL.baseURL() + this.imgPath + item.img}"  alt= "Image" onerror="this.src='${defaultImg}';">
                              <div class="info">
                                        <a href="#">
                                            <i></i>
                                               </a>
                                                <h5 class="title">
                                                      <a href="#"> ${title} </a>
                                                   </h5>
                                               </div>
                                           </div>   
                                          
                                      </div>`;
            }               
            return HTML;
        }   
        update(tag) {
               for (let i = 0; i < this.data.length; i++) {
                  if (tag === 'ALL') {
                    this.photosDOM[i].classList.remove('hidden');
                    continue;
                }
                  
                if (this.data[i].tags.includes(tag)) {
                    this.photosDOM[i].classList.remove('hidden');
                    
                } else {
                    this.photosDOM[i].classList.add('hidden');
                }
            }
        }
    
        render() {
            this.DOM.innerHTML = this.generateHTML();
    
            this.photosDOM = this.DOM.querySelectorAll('.item');
        }
    }
    
export { renderGalleryImages };
