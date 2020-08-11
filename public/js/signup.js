const form = document.querySelector('#signup-form');

console.log('sign up script')

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const email = formData.get('email');
  const userName = formData.get('userName');
  const password = formData.get('password');
  const password2 = formData.get('password2');

  const body = { userName, password, password2, email };
  
  const res = await fetch('/api/users', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await res.json();
  if(!res.ok) {
    const { message, errors } = data;
    const errorsContainer = document.querySelector('#errors-container');
    for(let error of errors){
      const errorLi = document.createElement('li');
      errorLi.innerHTML = error;
      errorsContainer.appendChild(errorLi);
    } 
    return; 
  }

  console.log(data);
  window.location.href = '/';
});