const joinButton = document.querySelector('.button')

 window.myFunction = () => {
     let id = window.location.pathname.match(/\d+/)
    fetch('/api/eventId/userEvent', {
        method: 'POST',
        body: JSON.stringify({eventId: id[0]})
    })
 }
joinButton.innerHTML = `<button onclick="myFunction()">Click me</button>`