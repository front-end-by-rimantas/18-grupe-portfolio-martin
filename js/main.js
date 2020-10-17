// header import
import header from '../js/data/header.js';
//header rendering function
import { renderMeniu } from '../js/components/header/renderMeniu.js';
import { renderMobMeniu } from '../js/components/header/renderMobMeniu.js';

// hero import
// about import

// resume import
import resume from '../js/data/resume.js';
//resume rendering function
import { renderResume } from '../js/components/resume/renderResume.js';
//portfolio import
import galleryData from '../js/data/gallery.js';
import { renderGallery } from '../js/components/gallery/renderGallery.js'; 

/* <----- header -----> */
    const burgerDOM = document.querySelector('header .mob-menu-icon');
    const menuDOM = document.querySelector('body .menu');
    const bodyDOM = document.querySelector('main');
    //
    burgerDOM.addEventListener('click', () => {
        //susirandame artimiausia tevini elementa div
  
            menuDOM.classList.toggle('show');
        //uzsideda ant burger icon spalva
            burgerDOM.classList.add('new');

    });
//izjungiame burger icon pakeitimus paspaudus visur, isskyrus button
    bodyDOM.addEventListener('click', () => {
    burgerDOM.classList.remove('new');
    
    });

/* kai scrolini pasikeicia header fonas */
    const activDOM = document.querySelector('.header');
    window.onscroll = function() {scrollFunction()};
    function scrollFunction(){
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
            activDOM.classList.add("active");
        } else{
            activDOM.classList.remove("active");
        }
    };



/* uzdedamas progress bar ant meniu */
  
 /*   function bar(){
        const pbDOM = document.querySelectorAll('header .link');
        const barDOM = document.querySelector('body .pb');
        for (let i=0; i < pbDOM.lenght; i++)
        {   const allpb = pbDOM[i];
            console.log('pbDOM[i]');
            allpb.addEventListener('pointerenter', () => {
                barDOM.classList.remove('barafter'); 
                    barDOM.classList.add('bar'); 
            });
            
            allpb.addEventListener('pointerleave', () => {
                barDOM.classList.remove('bar'); 
                barDOM.classList.add('barafter'); 
            })
        }
    };*/

/* progress bar
    const pbDOM = document.querySelector('header .link');
    const barDOM = document.querySelector('body .pb');

    pbDOM.addEventListener('pointerenter', () => {
        barDOM.classList.remove('barafter'); 
            barDOM.classList.add('bar'); 
    });
    
    pbDOM.addEventListener('pointerleave', () => {
        barDOM.classList.remove('bar'); 
        barDOM.classList.add('barafter'); 
    });
*/



/* <----- hero -----> */

/* <----- about me -----> */

/* <----- my services -----> */

/* <----- my resume -----> */

/* <----- hire me -----> */

/* <----- my portfolio -----> */
new renderGallery({
    selector: '#PortfolioGallery',
    data: galleryData
});

/* <----- testimonials -----> */

/* <----- my blogs -----> */

/* <----- contact me -----> */

/* <----- footer -----> */

// header logic
// hero logic
// about logic
//portfolio logic


// header
renderMeniu('.header .menu-main-h',header);
renderMobMeniu('body .menu-mob-h',header);
//resume
renderResume('.resume .resume-grid',resume);
