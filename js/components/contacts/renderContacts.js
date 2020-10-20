import generateContacts from './generateCotacts.js';


function renderContacts(x) {

  // validation

  // logic

  let HTML = '';
  for (let i = 0; i < x.contactMe.length; i++) {
    const cont = x.contactMe[i];

    HTML += generateContacts(cont)
  }

  // console.log(HTML);

  const contactsDOM = document.querySelector('.contactMe-leftSide');
  contactsDOM.innerHTML = HTML;
};


export { renderContacts }