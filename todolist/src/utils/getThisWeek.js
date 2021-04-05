const getThisWeek = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const date = today.getDate();
  const day = today.getDay();
  const dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return dayName.map((_day, i) => {
    const thisWeek = new Date(year, month, date - day + i).toISOString();
    const _date = thisWeek.slice(8, 10);
    let _thisMonth = '';

    switch (thisWeek.slice(5, 7)) {
      case '01':
        _thisMonth = 'January';
        break;
      case '02':
        _thisMonth = 'February';
        break;
      case '03':
        _thisMonth = 'March';
        break;
      case '04':
        _thisMonth = 'April';
        break;
      case '05':
        _thisMonth = 'May';
        break;
      case '06':
        _thisMonth = 'June';
        break;
      case '07':
        _thisMonth = 'July';
        break;
      case '08':
        _thisMonth = 'August';
        break;
      case '09':
        _thisMonth = 'September';
        break;
      case '10':
        _thisMonth = 'October';
        break;
      case '11':
        _thisMonth = 'November';
        break;
      case '12':
        _thisMonth = 'December';
        break;
      default:
        _thisMonth = '';
    }

    return `${_day} ${_date} ${_thisMonth}`;
  });
};

// export default getThisWeek;

console.log(getThisWeek());
