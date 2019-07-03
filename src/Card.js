import React from 'react';

import './Card.css';

export default function Card({ content, colId, cardId, moveLeft, moveRight }) {
  return (
    <div className='card'>
      {colId > 0 ? (
        <span className='left' onClick={e => moveLeft(e, colId, cardId)}>
          ←
        </span>
      ) : (
        <span />
      )}

      <span>{content}</span>

      {colId < 3 ? (
        <span className='right' onClick={e => moveRight(e, colId, cardId)}>
          →
        </span>
      ) : (
        <span />
      )}
    </div>
  );
}
