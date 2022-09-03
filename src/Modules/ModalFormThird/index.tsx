import './ModalFormThird.scss';
import Button from '../../components/Button';
import {useState} from 'react';
import React from 'react';

function ModalFormThird({changeFormsValue,nextStep, onClose}: {changeFormsValue: any, nextStep: any, onClose: any}) {

  const [inputsValue, setInputsValue] = useState({
    pass: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputsValue(prev => {
      return {
        ...prev,
      [event.target.name]: event.target.value
      }
    })
  }

  const onSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()

    //Валидация на заполнены ли поля
    if(!inputsValue.pass ) {return}

      changeFormsValue(inputsValue)
      nextStep()
      onClose()
  }

  return (
    <div>
      <div className="relative">
          <input className='sign__modal_form-input' type="text" name='pass' placeholder='pass' onChange={handleChange} value={inputsValue.pass}/>
          <Button className={'btn-component__sign-modal btn'} onClick={onSubmit} text={'Зарегистрироваться'}/>
      </div>
    </div>
  );
}

export default ModalFormThird;