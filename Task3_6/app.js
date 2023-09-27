document.querySelector('#email').addEventListener('blur', validateEmail);
document.querySelector('#password').addEventListener('blur', validatePassword);
document.querySelector('#username').addEventListener('blur', validateUsername);
document.querySelector('#hobbies').addEventListener('blur', validateHobbies);

const reSpaces = /^\S*$/;

function validateUsername() {
  const hobbies = document.querySelector('#username');
  if (hobbies.value.trim() !== '') {
      hobbies.classList.remove('is-invalid');
      hobbies.classList.add('is-valid');
      return true;
  } else {
      hobbies.classList.remove('is-valid');
      hobbies.classList.add('is-invalid');
      return false;
  }
}



function validateEmail(e) {
    const email = document.querySelector('#email');
    const re = /^([a-zA-Z0-9_\-?\.?]){3,}@([a-zA-Z]){3,}\.([a-zA-Z]){2,5}$/;

    if (reSpaces.test(email.value) && re.test(email.value)) {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
        return true;
    } else {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        return false;
    }
}

function validatePassword() {
    const password = document.querySelector('#password');
    const re = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})(?=.*[!@#$%^&*])/;
    if (re.test(password.value) && reSpaces.test(password.value)) {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
        return true;
    } else {
        password.classList.add('is-invalid');
        password.classList.remove('is-valid');
        return false;
    }
}

function validateHobbies() {
    const hobbies = document.querySelector('#hobbies');
    if (hobbies.value.trim() !== '') {
        hobbies.classList.remove('is-invalid');
        hobbies.classList.add('is-valid');
        return true;
    } else {
        hobbies.classList.remove('is-valid');
        hobbies.classList.add('is-invalid');
        return false;
    }
}

(function () {
    const forms = document.querySelectorAll('.needs-validation');

    for (let form of forms) {
        form.addEventListener(
            'submit',
            function (event) {
                if (
                    !form.checkValidity() ||
                    !validateEmail() ||
                    !validateUsername() ||
                    !validatePassword() ||
                    !validateHobbies()
                ) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    form.classList.add('was-validated');
                }
            },
            false
        );
    }
})();
