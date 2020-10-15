function renderMobMeniu(selector, header){
    //validacija

    //logic
    const DOM = document.querySelector(selector);
    let HTML = '';
    const size = header.length;
    for( let i = 0; i < size; i++){
        const mobMenu = header[i];
        HTML+=`<a href="">${mobMenu.title}</a>`;
    }
    return DOM.innerHTML = HTML;
}

export { renderMobMeniu };