const hostingForm = document.querySelector('#host-form');
console.log(hostingForm);

hostingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const eventTypes = {
        'Paint by Wine': 1,
        'Green Tea':2,
        'Milkshakes': 3,
        'Share your pets': 4,
        'Oktoberfest': 5
    }

    const formData = new FormData(hostingForm);
    const _csrf = formData.get('_csrf')
    const date = new Date(formData.get('date'))
    const time = formData.get('time')
    const capacity = formData.get('capacity')
    const description = formData.get('description')

    const eventTypeId = eventTypes[formData.get('eventType')]
    const body = { _csrf, date, time, eventTypeId, capacity, description}
    const res = await fetch('/api/dashboard/hostEvent', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    window.location.href = '/dashboard/hosted';
});
