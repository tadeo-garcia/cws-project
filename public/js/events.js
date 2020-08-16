const getEvents = async () => {
  const res = await fetch('/api/events');
  const data = await res.json();
  return data;
};

const editDate = (date) => {
  let date1 = new Date(date);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  // console.log(date)
  const dateFirst = date.split('-')
  const dateParts = dateFirst[2].split('T');
  console.log(dateParts)


  const month = (monthNames[date1.getMonth()]);
  
  const year = date1.getFullYear()
  

  // const day = date1.getDay()
  // console.log(day)

  return month + ' ' + dateParts[0]  + ', ' + year
    ;
}

const createEventLi = (event) => {
  const prettyDate = editDate(event.date)
  return `
  <div class="card-event">
    <img src=${event.EventType.eventCard} />
    <div class="card-event-info">
      <div class="card-left-div">
      <h2>${event.EventType.type}</h2>
      <p>Date: ${prettyDate}</p>
      <p>Time: ${event.time}</p>
      <p>${event.EventType.eventDescription}</p>
      </div>
      <h2 class="card-event-profile">Host: ${event.host.fullName}</h2>
      <img src=${event.host.avatar} class="card-event-host avatar-bordered" />
    </div>
    <div class="button-div">
      <a href="/events/${event.id}" class="button">Sign Up Now <a>
      </div>
  </div>
    `
};

// <button class="button">Sign up now</button>

const populateEventsList = async () => {
  const eventsContainer = document.querySelector('.events')
  const { events } = await getEvents();

  for (let event of events) {
    const eventLi = createEventLi(event)
    eventsContainer.innerHTML += eventLi
  }


}

populateEventsList()