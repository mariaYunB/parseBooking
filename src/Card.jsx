import React, {useState} from 'react';
import './styles.css';
import deleteSVG from './delete.svg';

const Card = props => {
  const { adults, checkin, checkout, currency, hotel_name, id, price, has_meal } = props;
  const [isHovered, setIsHovered] = useState(false);

  const getBeautifiedDate = cardDate => {
    const day = cardDate.match(/(\d){2}$/)[0];
    const year = cardDate.match(/(\d){4}/)[0];
    const month = cardDate.match(/(?<=-)(\d){2}/)[0];
    const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
    const textMonth = months[month-1];

    const beautifiedDate = `${day} ${textMonth} ${year}`;
    return beautifiedDate;
  };

  const onDeleteCardClick = e => {
    e.target.closest('div[data-card=true]').remove();
  }

  return (
    <div className="card" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} data-card={true}>
      {isHovered ? <img onClick={onDeleteCardClick} className="card__delete" width="20px" src={deleteSVG} alt='удалить' /> : null}
      <p className="hidden">{id}</p>
      <p><b>Название отеля:</b> {hotel_name}</p>
      <p><b>Количество взрослых:</b> {adults}</p>
      <p><b>Дата заезда:</b> {getBeautifiedDate(checkin)}</p>
      <p><b>Дата выезда:</b> {getBeautifiedDate(checkout)}</p>
      <p><b>Цена самого дешевого номера:</b> {price} <span>{currency}</span></p>
      <p><b>Завтрак включён:</b> {has_meal ? 'да' : 'нет' }</p>
    </div>
  );
};

export default Card;
