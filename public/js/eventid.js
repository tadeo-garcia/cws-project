const joinButton = document.querySelector('.button')

 window.myFunction = () => {
     let id = window.location.pathname.match(/\d+/)
    fetch('/api/eventId/userEvent', {
        method: 'POST',
        body: JSON.stringify({eventId: id[0]})
    })
 }
joinButton.innerHTML = `<a href='/dashboard' class='join-button' onclick="myFunction()">Join Event</a>`