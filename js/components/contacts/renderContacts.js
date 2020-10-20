import generateAreaContacts from './generateAreaCotacts.js'

function renderContacts(x) {

  // validation

  // logic

  let HTML = '';
  for (let i = 0; i < x.length; i++) {
    const cont = x[i];

    HTML += generateAreaContacts(cont);
  }

  console.log(HTML);

  const contactsDOM = document.querySelector('.contactMe-leftSide');
  contactsDOM.innerHTML = HTML;
}

export { renderContacts }