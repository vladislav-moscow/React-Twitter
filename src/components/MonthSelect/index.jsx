import './MonthSelect.scss';
function MonthSelect() {
  const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май',
    'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ]
  const monthItem = month.map((item, index) =>  <option value={ index + 1 }>{ item }</option> )
  return (
    monthItem
  );
}

export default MonthSelect;