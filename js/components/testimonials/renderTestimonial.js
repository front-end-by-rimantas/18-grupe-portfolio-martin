import { renderCardList } from "./renderCardList.js";
import { renderControls } from "./renderControls.js";

function renderTestimonial(params){

    //input validation

    //logic
    let HTML = '';
    const testimonialsDOM = document.querySelector(params.selector);
    const testimonialsData = params.data;
    console.log(testimonialsData);

    const testimonialsCount = testimonialsData.length;

    for (let i = 0; i < testimonialsCount; i++){
        const testimonial = testimonialsData[i];
        HTML += `<div class="slider">
                        ${renderCardList(testimonial)}
                        ${renderControls()}
                        </div>`;
    }
    //post logic validation

    //output
    testimonialsDOM.innerHTML = HTML;
}

export { renderTestimonial }