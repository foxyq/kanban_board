import React from 'react';
import Card from './Card';

import './Column.css';

export default function Column({
  name,
  bg,
  data,
  addCard,
  id,
  moveLeft,
  moveRight
}) {
  return (
    <div className='column'>
      <section style={bg}>
        <h2>{name}</h2>
      </section>
      <section className='column__content'>
        {data.map(card => (
          <Card
            key={card.id}
            content={card.text}
            colId={card.columnId}
            cardId={card.id}
            moveLeft={moveLeft}
            moveRight={moveRight}
          />
        ))}
      </section>
      <button onClick={e => addCard(e, id)}>Add card</button>
    </div>
  );
}
