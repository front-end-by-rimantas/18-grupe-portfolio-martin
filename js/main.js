
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
        //susirandame artimiausia tevini elementa div

         
        burgerDOM.classList.remove('new');
    
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