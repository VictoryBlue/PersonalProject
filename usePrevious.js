// state每一变化
// previous = usePrevios(value)
function usePrevious(value){
  const ref = useRef()
  // useEffect将在渲染之后执行，每次最新的value都在下一次渲染后反应到
  useEffect(() => {
    ref.current = value
  })
  return ref.current
}
