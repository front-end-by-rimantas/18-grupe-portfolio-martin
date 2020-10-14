function renderResume(selector, resume){
    //validation


    //logic
    const DOM = document.querySelector(selector);
    let HTML = '';
   /* const size = resume.length;*/
    for(let i=0; i<2; i++){
        HTML += `<div class="work">
        <h1>Work</h1>
        <h2>Apple</h2>
        <h3>OCT 2015 - JUNE 2016</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.</p>
        <h2>Google</h2>
        <h3>OCT 2015 - JUNE 2016</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt sit amet erat malesuada interdum. Aenean sodales dui quis leo fermentum scelerisque.</p>
      </div>`;
    }
    return DOM.innerHTML = HTML;
}

export { renderResume };