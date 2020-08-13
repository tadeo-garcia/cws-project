const getEvents = async () => {
  const res = await fetch('/api/events');
  const data = await res.json();
  return data;
};

const createEventLi = (event) => {
  const date = new Date(event.date)
  return `
  <div class="card-event">
    <img src=${event.EventType.eventCard} />
    <div class="card-event-info">
      <div>
        <h2>${event.EventType.type}</h2>
        <p>${event.EventType.eventDescription}</p>
      </div>
      <h2 class="card-event-profile">Name Goes here</h2>
      <img src="/public/pics/milkshake-event/jonathan-borba-7TeR1A1MUpM-unsplash.jpg" class="card-event-host avatar-bordered" />
    </div>
    <div class="button-div">
      <a href="/event/${event.id}">
      <button class="button">Sign up now</button>
    </div>
  </div>
  `
};

const populateEventsList = async () => {
  const eventsContainer = document.querySelector('.events')
  const { events } = await getEvents();

  for (let event of events) {
    const eventLi = createEventLi(event)
    eventsContainer.innerHTML += eventLi
  }
}

populateEventsList();