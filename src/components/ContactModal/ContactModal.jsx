import { useState } from 'react';
import { closeBtn } from '../../image/image';
import './ContactModal.scss';

const ContactModal = () => {
    //name form
    const [addedName, setAdedName] = useState('')
    const [nameIsTouched, setNameIsTouched] = useState(false)
    const enteredNameInvalid = addedName.trim() === '' && nameIsTouched;
    const enteredNameValid = addedName.trim() === '';

        const nameChangeHandler = e => {
        setAdedName(e.target.value)
        setNameIsTouched(true)
    }

    // phone form
    const [addedNumber, setAddedNumber] = useState('')
    const [numberIsTouched, setNumberIsTouched] = useState(false)
    const numberIsInvalid = addedNumber.length < 12 && numberIsTouched
    const enteredNumberValid = addedNumber.length < 12

    const numberChangeHandler = e => {
        if (addedNumber.length < 12) {
            setAddedNumber(e.target.value)
        }
        setNumberIsTouched(true)
    }

    const formSubmitHandle = e => {
        e.preventDefault()
        
        if (enteredNameValid && enteredNumberValid) {
            return;
        }

        setNameIsTouched(false)
        setAdedName('')
        setNumberIsTouched(false)
        setAddedNumber('')
    }

  return (
    <div className='submitForm'>
      <form onSubmit={formSubmitHandle} className='form'>
        <div className='submitForm__header'>
          <div className='submitForm__title'>
          Залишайте заявку
          </div>
          <div className='submitForm__desc'>
          Ми зв’яжемося з вами найближчим часом.
          </div>
        </div>
      <div className={enteredNameInvalid && nameIsTouched ? 'input__form invalid' : 'input__form'}>
                <input
                    required
                    type="text"
                    id="name"
                    value={addedName}
                    placeholder="Ваше ім’я*"
                    onChange={nameChangeHandler}
                />
                <br />
                {enteredNameInvalid && <small> Enter the name please</small>}
            </div>
        <div className={numberIsInvalid && numberIsTouched ? 'input__form invalid' : 'input__form'}>
            <input
                required
                type="number"
                    id="number"
            placeholder="+380-00-000-00-00*"
            color='black'
                value={addedNumber}
                onChange={numberChangeHandler}
            />
            <br />
            {numberIsInvalid && numberIsTouched && <small> Enter all of 12 numbers</small>}
        </div>
            <div className='submitForm__button'>
              <button className='btn'>
                Відправить
              </button>
            </div>
            <div className='submitForm__description'>
          Натискаючи кнопку “Надіслати”, ви погоджуєтесь з
          <br />
          <span> <u>Правилами обробки персональних даних.</u></span>
          </div>
        </form>
      </div>
    )
}

export default ContactModal;


// <div className='ssss'>
// <form  className='pop-up'>
//       <div className='close__btn'>
//         <button className='btn'>
//           X
//         </button>
//       </div>
//       <div>
//         <div>
//           Залишайте заявку
//         </div>
//         <div>
//           Ми зв’яжемося з вами найближчим часом.
//         </div>
//         <input type="text" />
//         <input type="number" />
//         <div>

//     </form>
//     </div>
    