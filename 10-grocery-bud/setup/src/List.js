import { useContext } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Recordscontext } from './App';
const List = ({ item, id, Editfn }) => {
  const { setbuttonName, setItems, items } = useContext(Recordscontext);

  const edit = () => {
    setbuttonName('edit');
    Editfn(id);
  };
  const deleteRecords = () => {
    setItems(items.filter((item, idx) => id !== idx));
  };
  return (
    <>
      <div>
        <h2>{item}</h2>
        <button type="button" onClick={() => edit()}>
          <FaEdit />
        </button>

        <button type="button" onClick={() => deleteRecords()}>
          <FaTrash />
        </button>
      </div>
    </>
  );
};

export default List;
