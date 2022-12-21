import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  console.log(people);
  const handleRight = () => {
    setIndex((index + 1) % people.length);
  };
  const handleLeft = () => {
    setIndex(index - 1 < 0 ? people.length - 1 : index - 1);
  };
  const random = () => {
    return setIndex(parseInt(Math.random(0, 1) * people.length));
  };
  const { name, job, text, image } = people[index];

  return (
    <>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>

        <p>{name}</p>
        <p className="job">{job}</p>
        <p>{text}</p>
        <div>
          <FaChevronLeft
            className="prev-btn"
            onClick={handleLeft}
          ></FaChevronLeft>
          <FaChevronRight
            className="next-btn"
            onClick={handleRight}
          ></FaChevronRight>
        </div>
        <button className="random-btn" onClick={random}>
          Surprise Me
        </button>
      </article>
    </>
  );
};

export default Review;
