function contactFormValidationEvent() {
    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const comment = document.querySelector('#comment');
        // const confirmation = document.querySelector('#smallMessage');
        // contactFormValidation(name, email, comment, confirmation);
        contactFormValidation(name, email, comment);
    });

}
// function contactFormValidation(name, email, comment, confirmation)
function contactFormValidation(name, email, comment) {

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const commentValue = comment.value.trim();

    if (nameValue === '' || nameValue === null) {
        setErrorFor(name, 'Name can not be blank');
    } else {
        setSuccessFor(name);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email can not be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email);
    }

    if (commentValue === '') {
        setErrorFor(comment, 'Comment section can not be blank');
    } else {
        setSuccessFor(comment);
    }


    // if (contactFormValidation === true) {
    //     return setSuccessForConfirm(confirmation, 'Your message has been sent successfully. Thank You!')
    // }

}


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'contactMe-form-row error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'contactMe-form-row success';
}

function isEmail(email) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
};

// function setSuccessForConfirm(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('smallMessage');
//     formControl.className = 'smallMessage success';
//     small.innerText = message;
// }

export { contactFormValidationEvent }