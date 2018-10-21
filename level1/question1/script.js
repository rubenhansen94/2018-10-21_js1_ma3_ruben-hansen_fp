// Use RegEx to validate form

function checkValidation() {
    var firstName = document.querySelector('#first-name');
    var lastName = document.querySelector('#last-name');
    var phone = document.querySelector('#phone');
    var email = document.querySelector('#email');
    var phoneExpression = /[0-9]{8,8}$/;
    var emailExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var stringExpression = /[a-zA-Z]/;

    // Validation of First Name
    if (stringExpression.test(firstName.value)) {
        console.log('First Name is OK!')
        if (firstName.className === 'invalid') {
            firstName.classList.toggle('invalid');
        }
    } else if (!stringExpression.test(firstName.value)) {
        console.log('First Name is NOT OK!');
        if (firstName.className !== 'invalid') {
            firstName.classList.toggle('invalid');
        }
    }

    // Validation of Last Name
    if (stringExpression.test(lastName.value)) {
        console.log('Last Name is OK!')
        if (lastName.className === 'invalid') {
            lastName.classList.toggle('invalid');
        }
    } else if (!stringExpression.test(lastName.value)) {
        console.log('Last Name is NOT OK!');
        if (lastName.className !== 'invalid') {
            lastName.classList.toggle('invalid');
        }
    }

    // Validation of Phone Number
    if (phoneExpression.test(phone.value)) {
        console.log('Phone Number is OK!')
        if (phone.className === 'invalid') {
            phone.classList.toggle('invalid');
        }
    } else if (!phoneExpression.test(phone.value)) {
        console.log('Phone Number is NOT OK!');
        if (phone.className !== 'invalid') {
            phone.classList.toggle('invalid');
        }
    }

    // Validation of E-mail
    if (emailExpression.test(email.value)) {
        console.log('E-mail Name is OK!')
        if (email.className === 'invalid') {
            email.classList.toggle('invalid');
        }
    } else if (!emailExpression.test(email.value)) {
        console.log('E-mail is NOT OK!');
        if (email.className !== 'invalid') {
            email.classList.toggle('invalid');
        }
    }
}
