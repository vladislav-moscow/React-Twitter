import './ModalForm.scss';
import MonthSelect from '../../components/MonthSelect';
import DaySelect from '../../components/DaySelect';
import YearSelect from '../../components/YearSelect';

function ModalForm() {
  return (
    <div className="sign__modal_form">
      <h2 className="sign__modal_form-title">Создайте учетную запись</h2>
      <form action="#" method='GET'>
        <input type="text" placeholder='Имя' />
        <input type="phone" placeholder='Телефон' />
        <div className="sign__modal_form-content">
          <h4 className="sign__modal_form-content-title">Дата рождения</h4>
          <p className="sign__modal_form-content-text">
            Эта информация не будет общедоступной.
            Подтвердите свой возраст, даже если эта учетная запись предназначена для компании,
            домашнего животного и т. д.
          </p>
        </div>
        <div className="sign__modal_form-birthdate">
          <label dir='auto' id='Sector1'>
            <span>Месяц</span>
          </label>
          <select name="месяц" id="Sector1">
            <MonthSelect/>
          </select>
          <label dir='auto' id='Sector2'>
            <span>День</span>
          </label>
          <select name="день" id="Sector2">
            <DaySelect/>
          </select>
          <label dir='auto' id='Sector3'>
            <span>Год</span>
          </label>
          <select name="год" id="Sector3">
            <YearSelect/>
          </select>
        </div>
      </form>
    </div>
    
  );
}

export default ModalForm;