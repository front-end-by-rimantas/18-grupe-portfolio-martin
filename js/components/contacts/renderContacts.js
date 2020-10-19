// import generateAreaContacts from `./generateAreaCotacts.js`

function renderContacts(x) {

  // validation

  // logic

  let HTML = '';
  for (let i = 0; i < x.length; i++) {
    const cont = x[i];
    HTML += `<h2 class="contactMe-dropLine">${cont.title2}</h2>
            <p class="contactMe-secondLine">${cont.title3}</p>
            <i></i>

            <form class="form">
              <div class="contactMe-form-row">
                <input type="text" placeholder="${cont.placeholder1}">
              </div>

              <div class="contactMe-form-row">
                <input type="email" placeholder="${cont.placeholder2}">
              </div>

              <div class="contactMe-form-row last-row">
                <textarea placeholder="${cont.placeholder3}"></textarea>
              </div>
              <div class="contactMe-button">
                <a class="btn btn-getInTouch" href="#" target="_blank">${cont.button}</a>
              </div>
            </form>;`
  }

  console.log(HTML);

  const contactsDOM = document.querySelector('.contactMe-leftSide');
  contactsDOM.innerHTML = HTML;
}

export { renderContacts }