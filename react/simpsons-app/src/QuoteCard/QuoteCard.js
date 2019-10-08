import React from 'react';

import './QuoteCard.css';

function QuoteCard(props) {
  return (
    <div className="QuoteCard">
      <img src={props.img}/>
      <div className="text">
        <p className="quote">"{props.quote}"</p>
        <p className="name">{props.name}</p>
      </div>
    </div>
  );
}

export default QuoteCard;