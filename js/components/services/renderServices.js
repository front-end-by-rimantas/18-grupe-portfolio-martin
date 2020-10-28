function renderServices(selector, data) {
    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = data.length

    for (let i = 0; i < size; i++) {
        const service = data[i];
  
        HTML += `<div class="card">
        <i class="${service.icon}"></i>
        <p class="card-heading">${service.heading}</p>
        <p class="card-p">${service.text}</p>
        </div>`;
    };



    return DOM.innerHTML = HTML;
}


export { renderServices };