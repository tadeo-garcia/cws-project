const form = document.querySelector('#signup-form');
const errorsContainer = document.querySelector('#errors-container');

console.log('sign up script')

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get('email');
  const userName = formData.get('userName');
  const fullName = formData.get('fullName')
  const password = formData.get('password');
  const password2 = formData.get('password2');
  const _csrf = formData.get('_csrf')
  // console.log(token)

  const body = { email, userName, fullName, password, password2, _csrf };
  errorsContainer.innerHTML = ''

  const res = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await res.json();

  if (!res.ok) {
    const { message, errors } = data;

    console.log(errors)
    for (let error of errors) {
      const errorLi = document.createElement('li');
      if (error === 'Validation isEmail on email failed') {
        error = 'Please enter a valid Email'
      }
      errorLi.innerHTML = error; // error.msg ?
      errorsContainer.appendChild(errorLi);
    }
    return;
  }

  window.location.href = '/';
});

