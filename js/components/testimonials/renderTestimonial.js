/*import { renderCardList } from "./renderCardList.js";
import { renderControls } from "./renderControls.js";

function renderTestimonial(params){

    //input validation

    //logic
    let HTML = '';
    const DOM = document.querySelector(params.selector);
    const testimonialsData = params.data;

    const size = testimonialsData.length;

    for (let i = 0; i < size; i++){
        const testimonial = testimonialsData[i];
        HTML += `${renderCardList(testimonial)}`;

               
    }
    console.log(HTML);
    HTML += `${renderControls()}
    ${renderControls()}
    ${renderControls()}
    ${renderControls()}`;
    //post logic validation

    //output
    return DOM.innerHTML = HTML;
}

export { renderTestimonial }