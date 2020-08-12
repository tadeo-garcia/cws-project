const form = document.querySelector('#signup-form');
const errorsContainer = document.querySelector('#errors-container');

console.log('sign up script')

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const email = formData.get('email');
  const userName = formData.get('userName');
  const password = formData.get('password');
  const password2 = formData.get('password2');
  const token = formData.get('_csrf')
// router.post("/guest", csrfProtection, validateGuest, (req, res) => {
  // REST OF CODE NOT SHOWN


  const body = { email, userName, password, password2, token };
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

  // console.log(data);
  window.location.href = '/';
});


        // if(typeof errors[0] !== Object) {
        //   for (let error in errors) {
        //     console.log(typeof error)
        //     const errorLi = document.createElement('li');
        //     // console.log(error)
        //     if (error === 'Validation isEmail on email failed') {
        //       error = 'Please enter a valid Email'
        //     }
        //     errorLi.innerHTML = error; // error.msg ?
        //     errorsContainer.appendChild(errorLi);
        //   }
        //   return;
        // } 