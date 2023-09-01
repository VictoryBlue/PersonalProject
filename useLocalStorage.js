// 要的效果
// 可以得到LocalStorage的值，可以改变LocalStorage的值

function useLocalStorage(key, initialValue){
  const [state, setValue] = useState(initialValue||localStorage.getItem(key))
  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])
  return [value, setValue]
}