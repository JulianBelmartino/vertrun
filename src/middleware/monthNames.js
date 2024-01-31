function monthNames(monthSelector) {
  const [month, year] = monthSelector.split('-').map(Number);

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  if (month >= 1 && month <= 12) {
    return `${months[month - 1]} ${year}`;
  } else {
    return 'Invalid Month';
  }
}

export { monthNames };