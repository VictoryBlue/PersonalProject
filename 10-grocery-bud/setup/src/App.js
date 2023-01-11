import { useState, useEffect, useRef, createContext } from 'react';
import List from './List';
import Alert from './Alert';
export const Recordscontext = createContext();
function App() {
  const [buttonName, setbuttonName] = useState('submit');

  const [items, setItems] = useState([]);
  const [alert, setAlert] = useState('');
  const [editIdx, setEditIdx] = useState();
  const input = useRef(null);
  // deps一定要加[]，否则JSON.parse每次都生成新的数组，永远会更新
  useEffect(() => {
    const localData = localStorage.getItem('items')
      ? JSON.parse(localStorage.getItem('items'))
      : [];
    setItems(localData);
  }, []);
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const addItem = (e) => {
    e.preventDefault();
    let newItems;
    if (buttonName === 'submit') {
      newItems = [...items, input.current.value];
      setAlert('submit');
    }
    if (buttonName === 'edit' && editIdx !== null) {
      newItems = JSON.parse(JSON.stringify(items));
      newItems[editIdx] = input.current.value;
      setAlert('edit');
      setEditIdx(null);
    }
    setItems(newItems);
    // localStorage.setItem('items', JSON.stringify(newItems));
    // 回归初始状态
    setbuttonName('submit');
    input.current.value = '';
  };

  const clearItem = () => {
    setAlert('clear');
    setbuttonName('submit');
    setItems([]);
  };

  return (
    <>
      <Recordscontext.Provider value={{ items, setItems, setbuttonName }}>
        <section className="section-center">
          {<Alert alert={alert} setAlert={setAlert} />}
          <h3>Grocery Bud</h3>
          <form>
            <input ref={input} type="text" placeholder="e.g.eggs" required />

            <button type="submit" onClick={(e) => addItem(e)}>
              {buttonName}
            </button>
            {items &&
              items.map((item, idx) => {
                return (
                  <List item={item} key={idx} id={idx} Editfn={setEditIdx} />
                );
              })}
          </form>
          <button
            type="button"
            className="delete-btn"
            onClick={() => clearItem()}
          >
            Clear Items
          </button>
        </section>
      </Recordscontext.Provider>
    </>
  );
}

export default App;
