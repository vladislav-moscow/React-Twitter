import './YearSelect.scss';

function YearSelect() {

  const year = [];
  for(let i = 2022; i>=1960; i--) {
    year.push(i)
  }

  const yearItem = year.map((item) =>  <option value={ "item" }>{ item }</option> )
  return (
    yearItem
  );
}

export default YearSelect;