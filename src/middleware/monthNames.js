
function monthNames(monthSelector) {
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
  
    
    if (monthSelector >= 1 && monthSelector <= 12) {
      return months[monthSelector - 1];
    } else {
      return 'Invalid Month';
    }
  }
  
  export { monthNames };