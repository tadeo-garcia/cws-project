const editDate = (date) => {
  let date1 = new Date(date);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const month = (monthNames[date1.getMonth()]);
  const year = date1.getFullYear()
  const day = date1.getDay()
  return month + ' ' + day + ', ' + year
    ;
};
//  const changeDate = () => {
// const datesToChange = document.querySelectorAll(".date-class")

// for (let i = 0; i < datesToChange.length; i++){
//  const dateGrab = datesToChange[i].innerHTML.trim();
//  console.log(dateGrab)
//  console.log(editDate(dateGrab))
//  datesToChange[i].innerhtml = editDate(dateGrab)
// }
// }
const changeDate = () => {
    const dateP = document.getElementById('date-class')
    const dateToChange = dateP.innerHTML;
    dateP.innerHTML = editDate(dateToChange)
}

changeDate()