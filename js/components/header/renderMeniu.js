function renderMeniu(selector, header){
    //validacija

    //logic
    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = header.length;
    for( let i = 0; i < size; i++){
        const men = header[i];
        HTML+=`<div  class="border"> <div class="progress-bar">
        <a class="link" href="#${men.title}">${men.title}</a>
        <div class="pb"></div></div>
        </div>`;
    }
    return DOM.innerHTML = HTML;
}

export { renderMeniu };