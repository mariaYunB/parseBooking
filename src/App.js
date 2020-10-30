import React from 'react';
import './styles.css';
import Card from './Card.jsx';
import rates from './data.js';

const App = () => {

  return (
    <div className="app">
      {rates.map((card, i) => {
        return (
          <Card key={i}
            adults={card.adults}
            checkin={card.checkin}
            checkout={card.checkout}
            currency={card.currency}
            hotel_name={card.hotel_name}
            id={card.id}
            price={card.price}
            has_meal={card.has_meal}
          />
        );
      })}
    </div>
  );
};

export default App;
