
/* <----- header -----> */
const burgerDOM = document.querySelector('header .mob-menu-icon');
    const menuDOM = document.querySelector('body .menu');
    //
    burgerDOM.addEventListener('click', () => {
        //susirandame artimiausia tevini elementa div
  
            menuDOM.classList.toggle('show');
            burgerDOM.classList.add('new');
    
    //jeigu buvo paspausta yra true, o jeigu true tuomet remove show
    
    });
/* kai scrolini pasikeicia header fonas */
    const activDOM = document.querySelector('.header');
    window.onscroll = function() {scrollFunction()};
    function scrollFunction(){
        if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150){
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

/* burger button pasikeitimai */



/* <----- hero -----> */

/* <----- about me -----> */

/* <----- my services -----> */

/* <----- my resume -----> */

/* <----- hire me -----> */

/* <----- my portfolio -----> */

/* <----- testimonials -----> */

/* <----- my blogs -----> */

/* <----- contact me -----> */

/* <----- footer -----> */

// header logic
// hero logic
// about logic