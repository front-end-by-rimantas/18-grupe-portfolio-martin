// import { generateContacts } from `./generateCotacts.js`


function contactFormValidationEvent() {
    const form = e.target.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log(e);
        const name = e.target.querySelector('#name');
        const email = e.target.querySelector('#email');
        const comment = e.target.querySelector('#comment');
        contactFormValidation(name, email, comment);
    });

}

function contactFormValidation(name, email, comment) {
    console.log('labas');

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const commentValue = comment.value.trim();

    if (nameValue === '' || nameValue === null) {
        setErrorFor(name, 'Name can not be blank');
    } else {
        setSuccessFor(name);


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

    }


    function setErrorFor(input, message) {
        const formControl = input.nextElementSibling;
        // const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'contactMe-form-row error';
        small.nextElementSibling.innerText = message;
        // small.parentElement.innerText = message;
    }

    function setSuccessFor(input) {
        const formControl = input.nextElementSibling;
        formControl.nextElementSibling.className = 'contactMe-form-row success';
    }

    function isEmail(email) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    }
};

export { contactFormValidationEvent }