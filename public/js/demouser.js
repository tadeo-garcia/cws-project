const demoUserButton = document.querySelector('#demouser');

demoUserButton.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userName = "Joseph Smith"
    const password = 'password';
    const _csrf = 'seCMx_jTciG672KlJ3Y0qBdk'
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlck5hbWUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOlsxMTcsMTE1LDEwMSwxMTQsNzksMTEwLDEwMV19LCJpYXQiOjE1OTczNDIwMzAsImV4cCI6MTU5Nzk0NjgzMH0.oFlqfx66prPOQJNfT449OriQXYkDGtq7RrqY79Et8hk';
    
    const body = { userName, password, _csrf, token}

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