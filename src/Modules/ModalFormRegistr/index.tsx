import './ModalFormRegistr.scss';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../../components/Button';
import { authData, authUser } from '../../store/user/userSlice';
import { useAppDispatch } from '../../hooks/hooks';
import {isEmpty} from 'lodash'

function ModalFormRegistr() {
  
  const [inputsValue, setInputsValue] = useState<authData>({
    login: '',
    password: '',
  })

  let navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validateReg = async() => {
    return isEmpty((await dispatch(authUser(inputsValue))).payload)
  } 

  const handleChange = (event:any) => {
    setInputsValue(prev => {
      return {
        ...prev,
      [event.target.name]: event.target.value
      }
      
    })
  }

  const onSubmit = async (event: any) => {
    event.preventDefault()
    //Валидация на заполнены ли поля
    if(await validateReg()) {return}
    navigate(`/home`);
  }

  return (
    <div>
      <div className="sign__modal_form">
        <h2 className="sign__modal_form-title">Войти</h2>
        <form className='sign__modal_form-form' action="#" method='GET'>
          <div className="sign__modal_form-wrapper">
            <input className='sign__modal_form-input' type="text" name='login' placeholder='Логин' onChange={handleChange} value={inputsValue.login} required/>
          </div>
          <div className="sign__modal_form-wrapper">
            <input className='sign__modal_form-input' type="password" name='password' placeholder='Пароль' onChange={handleChange} value={inputsValue.password} required/>
          </div>
          <Button className={'btn-component__sign-modal btn'} onClick={onSubmit} text={'Войти'}/>
        </form>
      </div>
    </div>
  );
}

export default ModalFormRegistr;