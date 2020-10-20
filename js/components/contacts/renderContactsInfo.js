import generateContactsInfo from './generateContactsInfo.js';

function renderContactsInfo(data) {

    // validation

    // logic

    let HTML = '';
    for (let i = 0; i < data.contactInfo.length; i++) {
        const contInfo = data.contactInfo[i];

        HTML += generateContactsInfo(contInfo)
    }

    // console.log(HTML);

    const contactsInfoDOM = document.querySelector('.contactMe-contactInfo');
    contactsInfoDOM.innerHTML = HTML;
};


export { renderContactsInfo };