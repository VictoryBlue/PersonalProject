// 要的效果
// 可以得到LocalStorage的值，可以改变LocalStorage的值

function useLocalStorage(key, initialValue){
  const [state, setstate] = useState(initialState||localStorage.getItem(initialValue))
  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])
  return [value, setValue]
}