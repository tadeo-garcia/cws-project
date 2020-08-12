const getEvents = async () => {
    const res = await fetch('/api/events');
    const data = await res.json();
    return data;
  };

const createEventLi = (event) => {
    const date = new Date(event.date)
    return `
<div class ='event'>
${event.description}
</div>
  `;
};

  const populateEventsList = async () => {
    const eventsContainer = document.querySelector('.events')
    const { events } = await getEvents();

    for (let event of events){
        const eventLi = createEventLi(event)
        eventsContainer.innerHTML += eventLi
    }
  }

  populateEventsList();