import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useFetch } from '../../9-custom-hooks/final/2-useFetch';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/javascript-store-products';
const calculateMostExpensive = (data) => {
  console.log('hello ');
  return (
    data.reduce((total, item) => {
      const price = item.fields.price;
      if (price >= total) {
        total = price;
      }
      return total;
    }, 0) / 100
  );
};
// every time props or state changes, component re-renders
// 每次点击Click Me setCount改变了count的state，所以触发Index的re-render，进而触发bigList singleList的re-render
const Index = () => {
  const { products } = useFetch(url);
  const [count, setCount] = useState(0);
  const [cart, setCart] = useState(0);
  // 性能优化：useCallback里面包裹的函数相当于一个用闭包缓存了之前的函数。他依据数组中的依赖（cart）是否变化决定是否生成一个新的函数addToCart，这样就避免了在cart不变的时候Index re-render时产生了一个函数addToCart
  // useCallback决定是否创造一个新函数，并将addToCart指向它，起到缓存函数的作用
  const addToCart = useCallback(() => {
    setCart(cart + 1);
  }, [cart]);
// useMemo起到缓存值的作用，当依赖项不变，值也不变，返回return的值。
  const mostExpensive = useMemo(
    () => calculateMostExpensive(products),
    [products]
  );
  return (
    <>
      <h1>Count : {count}</h1>
      <button className="btn" onClick={() => setCount(count + 1)}>
        click me
      </button>
      <h1 style={{ marginTop: '3rem' }}>cart: {cart}</h1>
      <h1>Most Expensive : ${mostExpensive}</h1>
      <BigList products={products} addToCart={addToCart} />
    </>
  );
};
// 增加React.memo，对比发现products没有改变那么BigList就不必要re-render
// 但是当BigList加入参数addToCart时，每次Index组件渲染，导致addToCart值的变化，也就是BigList的Props变化，进而触发重新渲染
const BigList = React.memo(({ products, addToCart }) => {
  useEffect(() => {
    console.log('big list called');
  });
  return (
    <section className="products">
      {products.map((product) => {
        return (
          <SingleProduct
            key={product.id}
            {...product}
            addToCart={addToCart}
          ></SingleProduct>
        );
      })}
    </section>
  );
});

const SingleProduct = ({ fields, addToCart }) => {
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
      <button onClick={addToCart}>add to cart</button>
    </article>
  );
};
export default Index;
