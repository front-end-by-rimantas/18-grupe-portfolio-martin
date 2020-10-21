import generateContactsInfo from './generateContactsInfo.js';

function renderContactsInfo(data) {

    // validation

    // logic

    let HTML = '';
    for (let i = 0; i < data.contactsInfo.length; i++) {
        const contInfo = data.contactsInfo[i];

        HTML += generateContactsInfo(contsInfo);
    }

    // console.log(HTML);

    const contactsInfoDOM = document.querySelector('.contactMe-contactInfo');
    contactsInfoDOM.innerHTML = HTML;
};


export { renderContactsInfo };