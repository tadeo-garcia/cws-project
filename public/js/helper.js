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