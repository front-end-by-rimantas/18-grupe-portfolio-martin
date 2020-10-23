// header import
import header from '../js/data/header.js';
//header rendering function
import { renderMeniu } from '../js/components/header/renderMeniu.js';
import { renderMobMeniu } from '../js/components/header/renderMobMeniu.js';

// hero import
// about import
import { about } from '../js/data/about.js';
import { renderAbout } from '../js/components/about/renderAbout.js';
renderAbout(about);

// resume import
import resume from '../js/data/resume.js';
//resume rendering function
import { renderResume } from '../js/components/resume/renderResume.js';
//portfolio import
import gallery from './data/gallery.js';
import { renderGallery } from './components/gallery/renderGallery.js';

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
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        activDOM.classList.add("active");
    } else {
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
import { focusOnHero } from "./components/hireMe/hireMe.js"
focusOnHero();
/* <----- my portfolio -----> */
new renderGallery({
    selector: '#portfolioGallery',
    data: gallery,
    imagesDirectory: './img/portfolioImg/'
});

/* <----- testimonials -----> */

/* <----- my blogs -----> */
import { renderBlogs } from "../js/components/blogs/renderBlogs.js";
import { blogsData } from "./data/blogs.js";
import { imgHover } from "./components/blogs/blogsHover.js";
import { focusOnHeroBlog } from "./components/blogs/blogLink.js";
import { focusOnHeroImg } from "./components/blogs/blogImgLink.js";
renderBlogs('.blogs_block', blogsData);
imgHover();
focusOnHeroBlog();
focusOnHeroImg();
/* <----- contact me -----> */

import { contacts } from './data/contacts.js';
import { renderContacts } from './components/contacts/renderContacts.js';
import { contactFormValidationEvent } from './components/contacts/contactFormValidation.js';
renderContacts(contacts);

import { contactsInfo } from './data/contactsInfo.js';
import { renderContactsInfo } from './components/contacts/renderContactsInfo.js';
renderContactsInfo(contactsInfo);
contactFormValidationEvent();

/* <----- footer -----> */

// header logic
// hero logic
// about logic
//portfolio logic


// header
renderMeniu('.header .menu-main-h', header);
renderMobMeniu('body .menu-mob-h', header);
//resume
renderResume('.resume .resume-grid', resume);
