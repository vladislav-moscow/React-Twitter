import './DaySelect.scss';

function DaySelect() {

  const day = [];
  for(let i = 1; i<=31; i++) {
    day.push(i)
  }

  const dayItem = day.map((item) =>  <option value={ "item" }>{ item }</option> )
  return (
    dayItem
  );
}

export default DaySelect;