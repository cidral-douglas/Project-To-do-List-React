import React, { useState } from 'react';
import TodoForm from './Componentes/TodoForm';
import Modal from './Componentes/Modal';
import List from './Componentes/List';
import './Todo.css';
import listReducer from './Reducers/listReducer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


const SAVED_ITEMS = "savedItems";

function persistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
}

function loadState() {
    const actualState = localStorage.getItem(SAVED_ITEMS);
    if (actualState){
        return JSON.parse(actualState);
    } else {
        return []
    }
}

const store = createStore(listReducer, loadState());

store.subscribe(() => {
    persistState(store.getState())
})

function Todo() {
    
    const [showModal, setShowModal] = useState(false);

    function onHideModal(event){
            setShowModal(false);
    }
    
    return (
        <div className="container">

        <Provider store={store}>

            <header className="header">
                 <h1> To do </h1> 
                 <button onClick={() => {setShowModal(true)}} className="addButton"> + </button>
             </header>
           
            {/*  */}

            <List></List>

            <Modal show={showModal} onHideModal={onHideModal}> <TodoForm onHideModal={onHideModal}></TodoForm> </Modal>
        </Provider>

        </div> /*Container*/
    );
}

export default Todo;