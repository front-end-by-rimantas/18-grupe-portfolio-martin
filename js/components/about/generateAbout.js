function generateAbout(descr) {

    return `<div class="aboutMe-right-column">
          <h2 class="aboutMe-title">
            About <span class="aboutMe-me">Me</span>
          </h2>
          <h3 class="aboutMe-hello">${descr.headline}</h3>
          <p class="aboutMe-paragraph">${descr.paragraph1}</p>
          <p class="aboutMe-paragraph">
            ${descr.paragraph2}</p>
          <div class="aboutMe-socials">
            <a href="#" target="_blank" class="${descr.link1}" aria-hidden="true"></a>
            <a href="#" target="_blank" class="${descr.link2}" aria-hidden="true"></a>
            <a href="#" target="_blank" class="${descr.link3}" aria-hidden="true"></a>
            <a href="#" target="_blank" class="${descr.link4}" aria-hidden="true"></a>
            <a href="#" target="_blank" class="${descr.link5}" aria-hidden="true"></a>
          </div>
          <div class="aboutMe-button">
            <a class="btn btn-contactMe" href="#" target="_blank">${descr.button1}</a>
            <a class="btn btn-downloadCV" href="#" target="_blank">${descr.button2}</a>
          </div>
        </div>`;
};

export { generateAbout };