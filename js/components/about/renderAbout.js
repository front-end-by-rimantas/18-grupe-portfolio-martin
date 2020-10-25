import { generateAbout } from './generateAbout.js';


function renderAbout(info) {

    // validation

    // logic

    let HTML = "";

    for (let j = 0; j < info.aboutMe.length; j++) {
        const descr = info.aboutMe[j];

        HTML += generateAbout(descr);
    }

    // console.log(HTML);

    const aboutDOM = document.querySelector('.aboutMe-right-column');
    aboutDOM.innerHTML = HTML;

};

export { renderAbout };