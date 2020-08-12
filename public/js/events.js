const getEvents = async () => {
    const res = await fetch('/api/events');
    const data = await res.json();
    return data;
  };

const createEventLi = (event) => {
    const date = new Date(event.date)
    return `
    <div class="card-event">
    <img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/greece.jpg" />
     <div class="card-event-info">
      <img src="${event.EventType.eventCard}" />
        <div>
        <h2>${event.EventType.description}</h2>
        ${event.description}
      </div>
      </div>
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