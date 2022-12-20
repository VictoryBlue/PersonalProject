import { useState, useEffect, useCallback } from 'react';
// 自定义hook必须以use开头，自定义hook开头是use开头并且可能调用其他hook
export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = useCallback(async () => {
    const response = await fetch(url);
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getProducts();
  }, [url, getProducts]);
  // 当loading，products异步的变化时，这个异步的变化会传导到另外一个引用useFetch返回值的组件
  // 本例中是1-fetch-example
  return { loading, products };
};
