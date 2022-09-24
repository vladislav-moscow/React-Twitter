import './ModalFormThird.scss';
import Button from '../../components/Button';
import {useRef, useState} from 'react';
import React from 'react';
import { pink } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';


interface ModalFormThirdValues {
  isChecked: boolean;
}
interface ModalFormThirdsValues {
  changeFormsValue: any;
  nextStep: any;
  onClose: any;
}

function ModalFormThird({changeFormsValue,nextStep, onClose}: ModalFormThirdsValues) {

  const [inputsValue, setInputsValue] = useState<ModalFormThirdValues>({
    isChecked: false,
  })

  const inputChecked: any = useRef(null)

  const handleChange = () => {
    setInputsValue({isChecked: !inputsValue.isChecked})
  }

  const onSubmit = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()

    //Валидация на заполнены ли поля
    if(!inputsValue.isChecked ) {return}

      changeFormsValue(inputsValue)
      nextStep()
      onClose()
  }

  return (
    <div>
      <div className="relative">
        <label htmlFor="checkBox">
          <Checkbox title='label' ref={inputChecked} id='checkBox' sx={{color: pink[800],'&.Mui-checked': {color: pink[600],},}} onChange={handleChange} value={inputsValue.isChecked}/>
          <Link>Пользовательские соглашения</Link>
        </label>
        <Button className={'btn-component__sign-modal btn'} onClick={onSubmit} text={'Зарегистрироваться'}/>
      </div>
    </div>
  );
}

export default ModalFormThird;