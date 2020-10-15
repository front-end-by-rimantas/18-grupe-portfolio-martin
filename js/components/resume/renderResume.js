function renderResume(selector, resume){
    //validation


    //logic
    const DOM = document.querySelector(selector);
    let HTML = '';
   const size = resume.length;
    for(let i=0; i<resume.length; i++){
        const rez = resume[i];
        HTML += `<div class="work">
        <h1>${rez.title}</h1>
        <h2>${rez.firstTitle}</h2>
        <h3>${rez.data}</h3>
        <p>${rez.description}</p>
        <h2>${rez.secondTitle}</h2>
        <h3>${rez.data}</h3>
        <p>${rez.description}</p>
      </div>`;
    }
    return DOM.innerHTML = HTML;
}

export { renderResume };