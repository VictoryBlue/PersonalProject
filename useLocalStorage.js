// 要的效果
// 可以得到LocalStorage的值，可以改变LocalStorage的值
// 用户偏好设置：主题颜色、语言选择
function useLocalStorage(key, initialValue){
  const [value, setValue] = useState(initialValue||localStorage.getItem(key))
  useEffect(() => {
    localStorage.setItem(key, value)
  }, [value, key])
  return [value, setValue]
}