function renderHeaderEvents(header) {

    const burgerDOM = document.querySelector('header .mob-menu-icon');
    const menuDOM = document.querySelector('body .menu');
    const bodyDOM = document.querySelector('main');

    burgerDOM.addEventListener('click', () => {
        //susirandame artimiausia tevini elementa div

        menuDOM.classList.toggle('show');
        //uzsideda ant burger icon spalva
        burgerDOM.classList.add('new');

    });
    //izjungiame burger icon pakeitimus paspaudus visur, isskyrus button
    bodyDOM.addEventListener('click', () => {
        console.log('asfdg');
        menuDOM.classList.remove('show');
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

}

export { renderHeaderEvents };