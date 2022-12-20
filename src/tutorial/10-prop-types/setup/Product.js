import PropTypes from 'prop-types';
import React from 'react';
import defaultImage from '../../../assets/default-image.jpeg';
const Product = ({ image, name, price }) => {
  return (
    <article className="product">
      <h4>single product</h4>
      <img src={image.url || defaultImage} alt="name" />
      <h4>{name}</h4>
      <p>${price}</p>
    </article>
  );
};
// 可以引入prop-types包对组件的props进行校验
// 组件.propTypes = {}
Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
Product.defaultProps = {
  name: 'default name',
  price: 3.99,
  image: defaultImage,
};
export default Product;
