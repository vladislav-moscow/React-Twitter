import './YearSelect.scss';

function YearSelect() {

  const year = [];
  for(let i = 2022; i>=1960; i--) {
    year.push(i)
  }

  const yearItem = year.map((item,index) =>  <option value={ index + 1 }>{ item }</option> )
  return (
    yearItem
  );
}

export default YearSelect;