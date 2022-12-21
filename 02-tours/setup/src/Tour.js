import React, { useState } from 'react';
import Tours from './Tours';

const Tour = ({ id, image, info, price, name, setTours }) => {
  const handleDelete = () => {
    setTours((tours) => {
      return tours.filter((tour) => {
        return tour.id !== id;
      });
    });
  };
  const [readMore, setReadMore] = useState(true);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? `${info.substring(0, 200)}...` : info}
          <button
            onClick={() => {
              setReadMore(!readMore);
            }}
          >
            {readMore ? 'show more' : 'show less'}
          </button>
        </p>

        <button
          className="delete-btn"
          onClick={() => {
            handleDelete();
          }}
        >
          Not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
