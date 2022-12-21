import React from 'react';
import Tour from './Tour';
const Tours = ({ tours, setTours }) => {
  return (
    <>
      <section>
        <div className="title">
          
        </div>
        {/* {...tour}传递多个参数 */}
        <div>
          {tours.map((tour) => {
            return <Tour key={tour.id} setTours={setTours} {...tour} />;
          })}
        </div>
      </section>
    </>
  );
};

export default Tours;
