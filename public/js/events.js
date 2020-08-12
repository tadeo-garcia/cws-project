const getEvents = async () => {
  const res = await fetch('/api/events');
  const data = await res.json();
  return data;
};
// eventType values
//${event.EventType.type}
//  ${event.EventType.eventBanner} 
//     ${event.EventType.eventCard}
//     ${eventEventType.eventDescription}
//     ${event.EventType.eventSuggestions} 
//     ageLimit: true
// ${event.User.fullName}
//${event.User.avatar} to go in avatar-bordered
// ${event.User.fullName} to go in Host Name
// ${event.User.avatar} to go in avatar img
const createEventLi = (event) => {
  const date = new Date(event.date)
  return `
  <div class="card-event">
  <img src=${event.EventType.eventCard} />
  <div class="card-event-info">
    <div>
      <h2>${event.EventType.type}</h2>
      <p>${event.description}</p>
    </div>
    <h2 class="card-event-profile">Host Name</h2>
    <img src="/public/pics/milkshake-event/jonathan-borba-7TeR1A1MUpM-unsplash.jpg" class="card-event-host avatar-bordered" />
  </div>
</div
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