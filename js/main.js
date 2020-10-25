// header import
import header from '../js/data/header.js';
//header rendering function
import { renderMeniu } from '../js/components/header/renderMeniu.js';
import { renderMobMeniu } from '../js/components/header/renderMobMeniu.js';
import { renderHeaderEvents } from '../js/components/header/renderHeaderEvents.js';

// hero import
// about import

//* resume import
import resume from '../js/data/resume.js';
//resume rendering function
import { renderResume } from '../js/components/resume/renderResume.js';
//portfolio import
import gallery from './data/gallery.js';
import { renderGallery } from './components/gallery/renderGallery.js'; 

//testimonials
import testimonials from "./data/testimonials.js";
//rendering function
import { Testimonial } from "./components/testimonials/Testimonial.js";
/* <----- header -----> */

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

/* <----- footer -----> */

// header logic
// hero logic
// about logic
//portfolio logic


// header
renderMeniu('.header .menu-main-h',header);
renderMobMeniu('body .menu-mob-h',header);
renderHeaderEvents(header);
//resume
renderResume('.resume .resume-grid', resume);
// hireMe
focusOnHero(); 

//testimonials
new Testimonial(testimonials);
