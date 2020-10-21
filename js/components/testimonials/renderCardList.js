function renderCardList(testimonial){

return `<div class="list">
<div class="slider-list">
<img src="${testimonial.photo}" alt="Photo">
<p>${testimonial.paragraph}</p>
<h5>${testimonial.title}</h5>
<label>${testimonial.label}</label>
</div>
</div>`;

}

export { renderCardList }