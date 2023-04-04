const useFetch = () => {
  useEffect(() => {
    fetch(url, 'get')
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      })
      .then((data) => {});
  }, [url]);
  return {};
};
