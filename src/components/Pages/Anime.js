import React, { useState } from 'react';
import './Anime.css';

export const Anime = () => {
  const [openCard, setOpenCard] = useState(null);

  const handleCardClick = (index) => {
    setOpenCard((prevOpenCard) => (prevOpenCard === index ? null : index));
  };
  const handleJoinButtonClick = (title) => {
    alert(`You liked the item: ${title}`);
  };

  const cardData = [
    {
      image:
        'http://i.harperapps.com/covers/9780008108298/y450-293.jpg',
      title: 'The Fellowship of the Ring',
      author: 'J.R.R. Tolkien',
      summary:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ratione impedit temporibus maiores autem aperiam assumenda exercitationem, quisquam nobis esse.',
    },
    {
      image:
        'https://i.pinimg.com/originals/52/ec/12/52ec12f7dd324864949267c92cce2e43.jpg',
      title: '1984',
      author: 'George Orwell',
      summary:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ratione impedit temporibus maiores autem aperiam assumenda exercitationem, quisquam nobis esse.',
    },
    {
      image:
        'https://images-na.ssl-images-amazon.com/images/I/51N5qVjuKAL._SX309_BO1,204,203,200_.jpg',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      summary:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ratione impedit temporibus maiores autem aperiam assumenda exercitationem, quisquam nobis esse.',
    },
    {
      image:
        'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/TheGreatGatsby_1925jacket.jpeg/220px-TheGreatGatsby_1925jacket.jpeg',
      title: 'Great Gatsby',
      author: 'F Scott Fitzgerald',
      summary:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod ratione impedit temporibus maiores autem aperiam assumenda exercitationem, quisquam nobis esse.',
    },
  ];

  return (
    <div className="container">
    <div className="center list flex-column">
      {cardData.map((card, index) => (
        <div
          key={index}
          className={`card flex-row ${openCard === index ? 'open' : ''}`}
          onClick={() => handleCardClick(index)}
        >
          <img src={card.image} alt="Book Cover" className="book" />
          <div className="flex-column info">
            <div className="title">{card.title}</div>
            <div className="author">{card.author}</div>
            <div className="hidden bottom summary">{card.summary}</div>
          </div>
          <div className="flex-column group">
            <div className="members">
              <span className="current">14</span> /
              <span className="max">30</span>
            </div>
            <div className="hidden bottom">
              <button
                className="simple"
                onClick={() => handleJoinButtonClick(card.title)}
              >
                Join
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default Anime;
