import { meltemProduct } from '../../image/image';
import './Main.scss'

const Main = () => {
  return (
    <div className='main'>
      <div className='main__info'>
        <div className='main__introduction'>
          <div className='main__introduction__header'>
            <div className='main__introduction__header__h1'>
              Meltem
            </div>
            <div className='main__introduction__description'>
              Meltem – це гарантовано якісне вентиляційне обладнання 
              від німецького заводу.
            </div>
            <div className='main__introduction__btn'>
              <button className='main__introduction__button'>
                Продукція
              </button>
            </div>
          </div>
        </div>
        <div className='main__image'>
          <img className='main__img' src={meltemProduct} alt="meltem product" />
        </div>
        <div className='main__description__product'>
          <div className='main__description__product__desc'> 
            Відцентровий витяжний вентилятор
          </div>
          <div className='main__description__product__header'>
            Meltem V-II 30-N
          </div>
          <div className='main__description__product__button'>
            <button className='main__description__product__btn'>
              Детальніше
            </button>
          </div>
        </div>
        </div>
    </div>
    )
}

export default Main;