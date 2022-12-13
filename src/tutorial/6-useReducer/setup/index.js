import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
import { reducer } from '../reducer';
// reducer function
// Note：不再单独调用setName setPeople而是通过reducer匹配dispatch的模式，很像switch

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');
  const [state, dispatch] = useReducer(reducer, defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItems = { id: new Date().getTime().toString() };
      dispatch({ type: 'ADD_ITEM', payload: newItems });
    } else {
      dispatch({ type: 'NO_VALUE' });
    }
  };
  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <button className="btn" type="submit">
          add
        </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() => {
                dispatch({ type: 'REMOVE_ITEM', payload: person.id });
              }}
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;
