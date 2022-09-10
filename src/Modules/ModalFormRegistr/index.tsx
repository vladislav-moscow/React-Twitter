import './ModalFormRegistr.scss';
import React, { useState } from 'react';
//import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button';

function ModalFormRegistr() {
  
  const [inputsValue, setInputsValue] = useState({
    loginReg: '',
    passwordReg: '',
  })

  let navigate = useNavigate();

  const validateReg = () => {
    if(inputsValue.loginReg === 'login' && inputsValue.passwordReg === 'password') {return};
  } 

  const handleChange = (event:any) => {
    setInputsValue(prev => {
      return {
        ...prev,
      [event.target.name]: event.target.value
      }
      
    })
  }

  const onSubmit = (event: any) => {
    event.preventDefault()
    //Валидация на заполнены ли поля
    validateReg()
    navigate(`/home`);
  }

  return (
    <div>
      <div className="sign__modal_form">
        <h2 className="sign__modal_form-title">Войти</h2>
        <form className='sign__modal_form-form' action="#" method='GET'>
          <div className="sign__modal_form-wrapper">
            <input className='sign__modal_form-input' type="text" name='loginReg' placeholder='Логин' onChange={handleChange} value={inputsValue.loginReg} required/>
          </div>
          <div className="sign__modal_form-wrapper">
            <input className='sign__modal_form-input' type="password" name='passwordReg' placeholder='Пароль' onChange={handleChange} value={inputsValue.passwordReg} required/>
          </div>
          {/* <Link className={'btn-component__sign-modal btn'}  to="/home">Войти</Link> */}
          <Button className={'btn-component__sign-modal btn'} onClick={onSubmit} text={'Войти'}/>
        </form>
      </div>
    </div>
  );
}

export default ModalFormRegistr;