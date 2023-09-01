function useInput(input){
  const [value, setvalue] = useState(input)
  const onChange = (e)=>{
    setvalue(e.target.value)
  }
  const inputProps = {value: value, onChange:onChange}
  return inputProps
}