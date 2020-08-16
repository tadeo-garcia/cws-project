const form = document.querySelector('#login-form');
const demoForm = document.querySelector('#demo-form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  
  const formData = new FormData(form);
  const userName = formData.get('userName');
  const password = formData.get('password');
  const _csrf= formData.get('_csrf')
  // console.log(_csrf);
  const body = { userName, password, _csrf }

  
  const res = await fetch('/api/users/token', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await res.json();
  if(!res.ok) {
    const { message } = data;
    const errorsContainer = document.querySelector('#errors-container');
    errorsContainer.innerHTML = message; 
    return; 
  }

  window.location.href = '/events';
});

demoForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const userName = 'userOne';
  const password = 'password';
  const _csrf = formData.get('_csrf')
  // console.log(_csrf);
  const body = { userName, password, _csrf }

  const res = await fetch('/api/users/token', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await res.json();
  if (!res.ok) {
    const { message } = data;
    const errorsContainer = document.querySelector('#errors-container');
    errorsContainer.innerHTML = message;
    return;
  }

  window.location.href = '/events';
});