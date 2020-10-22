
const form = document.getElementById('form')
const name = document.getElementById('contactName');
const email = document.getElementById('email');
const comment = document.getElementById('comment');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    checkInputs();
});

function checkInputs() {

    const nameValue = contactName.value.trim();
    const emailValue = email.value.trim();
    const commentValue = comment.value.trim();

    if (nameValue === '') {
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
        const formControl = input.parentElement;
        const small = formControl.querySelector('small');
        formControl.className = 'contactMe-form-row error';
        small.innerText = message;

    }

    function setSuccessFor(input) {
        const formControl = input.parentElement;
        formControl.className = 'contactMe-form-row success';
    }

    function isEmail(email) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    }


// // function contactFormValidation(contacts) {
// let form = document.getElementById('contact-form')
// let name = document.getElementById('contactName');
// let email = document.getElementById('email');
// let comment = document.getElementById('comment');
// // let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    //     if (contacts.name.value === "" || contatcs.email.value === "" || contatcs.comment.value === "") {
    //         alert("No blank values allowed")
    //     }
    //     else {
    //     };


    //     if (contatcs.email.match(pattern)) {
    //         form.classList.add("Valid");
    //         form.classList.remove("Invalid");

    //     }
    //     else {
    //         form.classList.remove("Valid");
    //         form.classList.add("Inalid");
    //         alert('Your email is invalid');
    //     };
    // }

    // export { contactFormValidation };

