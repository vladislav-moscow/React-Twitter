import './ModalForm.scss';
import MonthSelect from '../../components/MonthSelect';
import DaySelect from '../../components/DaySelect';
import YearSelect from '../../components/YearSelect';

function ModalForm() {
  return (
    <div className="sign__modal_form">
      <h2 className="sign__modal_form-title">Создайте учетную запись</h2>
      <form className='sign__modal_form-form' action="#" method='GET'>
        <input className='sign__modal_form-input' type="text" placeholder='Имя' />
        <input className='sign__modal_form-input' type="phone" placeholder='Телефон' />
        <div className="sign__modal_form-content">
          <h4 className="sign__modal_form-content-title">Дата рождения</h4>
          <p className="sign__modal_form-content-text">
            Эта информация не будет общедоступной.
            Подтвердите свой возраст, даже если эта учетная запись предназначена для компании,
            домашнего животного и т. д.
          </p>
        </div>
        <div className="sign__modal_form-birthdate">
          <div className="sign__modal_form-birthdate-wrapp">
            <label className='label' dir='auto' id='Sector1'>
            <span>Месяц</span>
          </label>
          <select className='sign__modal_form-birthdate-sector1 select' name="месяц" id="Sector1">
            <MonthSelect/>
          </select>
          </div>
          <div className="sign__modal_form-birthdate-wrapp">
            <label className='label' dir='auto' id='Sector2'>
              <span>День</span>
            </label>
            <select className='sign__modal_form-birthdate-sector2 select' name="день" id="Sector2">
              <DaySelect/>
            </select>
          </div>
          <div className="sign__modal_form-birthdate-wrapp">
            <label className='label' dir='auto' id='Sector3'>
              <span>Год</span>
            </label>
            <select className='sign__modal_form-birthdate-sector3 select' name="год" id="Sector3">
              <YearSelect/>
            </select>
          </div>
        </div>
      </form>
    </div>
    
  );
}

export default ModalForm;