import './MonthSelect.scss';
function MonthSelect() {
  const month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май',
    'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ]
  const monthItem = month.map((item) =>  <option value={ "item" }>{ item }</option> )
  return (
    monthItem
  );
}

export default MonthSelect;