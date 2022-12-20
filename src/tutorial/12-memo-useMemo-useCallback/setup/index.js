import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products';

// every time props or state changes, component re-renders
// 每次点击Click Me setCount改变了count的state，所以触发Index的re-render，进而触发bigList singleList的re-render
const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <BigList products={products} />
    </>
  );
};
// 增加React.memo，对比发现products没有改变那么BigList就不必要re-render
const BigList = React.memo(({ products }) => {
  useEffect(() => {
    console.log('big list called');
  });
  return (
    <section className="products">
      {products.map((product) => {
        return <SingleProduct key={product.id} {...product}></SingleProduct>;
      })}
    </section>
  );
});

const SingleProduct = ({ fields }) => {
  useEffect(() => {
    console.log('single list called');
  });
  let { name, price } = fields;
  price = price / 100;
  const image = fields.image[0].url;

  return (
    <article className="product">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};
export default Index;
