const joinButton = document.querySelector('.join-button')
const myFunction = async (e) => {
    e.preventDefault()
    let id = Number(e.currentTarget.id);
    //  let id = window.location.pathname.match(/\d+/)
    await fetch('/api/eventId/userEvent', {
        method: 'POST',
        body: JSON.stringify({eventId: id}),
        headers: {
            'Content-Type': 'application/json'
          }
    })
    window.location.href = '/dashboard'
}
// joinButton.innerHTML = `<a href='/dashboard'class='join-button id=' onclick="myFunction(event)">Join Event</a>`

joinButton.addEventListener("click", (e) => myFunction(e))

