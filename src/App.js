import React, { Component } from 'react';
import './App.css';

import Column from './Column';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        { name: 'Home', color: '#8E6E95' },
        { name: 'Work', color: '#39A59C' },
        { name: 'Store', color: '#344759' },
        { name: 'Gym', color: '#E7841E' }
      ],
      cards: [
        { id: 0, text: 'vacuum', columnId: 0 },
        { id: 1, text: 'do the dishes', columnId: 0 },
        { id: 2, text: 'finish task', columnId: 1 },
        { id: 3, text: 'report to manager', columnId: 1 },
        { id: 4, text: 'bananas', columnId: 2 },
        { id: 5, text: 'rice', columnId: 2 },
        { id: 6, text: 'oats', columnId: 2 },
        { id: 7, text: 'squats', columnId: 3 }
      ]
    };
  }

  prompt = (e, col) => {
    const res = window.prompt('name of a new card: ');

    const maxId = this.state.cards[this.state.cards.length - 1].id;

    const newCard = {
      id: maxId + 1,
      text: res,
      columnId: col
    };

    this.setState({ cards: [...this.state.cards, newCard] });
  };

  moveLeft = (e, colId, cardId) => {
    if (colId <= 0) return;

    const updatedCards = this.state.cards.map(card => {
      if (card.id === cardId) {
        const newCard = {
          id: card.id,
          text: card.text,
          columnId: card.columnId - 1
        };

        return newCard;
      } else {
        return card;
      }
    });

    this.setState({ cards: updatedCards });
  };

  moveRight = (e, colId, cardId) => {
    if (colId >= 3) return;

    const updatedCards = this.state.cards.map(card => {
      if (card.id === cardId) {
        const newCard = {
          id: card.id,
          text: card.text,
          columnId: card.columnId + 1
        };

        return newCard;
      } else {
        return card;
      }
    });

    this.setState({ cards: updatedCards });
  };

  render() {
    return (
      <div className='App'>
        {this.state.columns.map((column, id) => (
          <Column
            key={column.name}
            id={id}
            name={column.name}
            bg={{ backgroundColor: column.color }}
            data={this.state.cards.filter(card => card.columnId === id)}
            addCard={this.prompt}
            moveLeft={this.moveLeft}
            moveRight={this.moveRight}
          />
        ))}
      </div>
    );
  }
}

export default App;
