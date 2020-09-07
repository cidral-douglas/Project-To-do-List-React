import React, { useState, useEffect } from 'react';
import TodoForm from './Componentes/TodoForm';
import Modal from './Componentes/Modal';
import List from './Componentes/List';
import './Todo.css';
import Item from './Componentes/Item';

const SAVED_ITEMS = "savedItems";

function Todo() {
    
    const [items,setItems] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
        if(savedItems){
            setItems(savedItems);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
    }, [items]);

    function onAddItem(text) {
        let item = new Item(text);
        setItems([...items, item]);
        onHideModal();
    }

    //Filtra os item que não foram clicados para serem excluídos//
    function onItemDeleted(item) {
        let filteredItems = items.filter(i => i.id !== item.id);

        setItems(filteredItems);
    }

    //Muda o estado "done" do item clicado//
    function onDone(item) {
        let updatedItems = items.map(i => {
            if (i.id === item.id){
                i.done = !i.done;
            }
            return i;
        })

        setItems(updatedItems);
    }

    function onHideModal(event){
            setShowModal(false);
    }
    
    return (
        <div className="container">

            <header className="header">
                 <h1> To do </h1> 
                 <button onClick={() => {setShowModal(true)}} className="addButton"> + </button>
             </header>
           
            {/*  */}

            <List onDone={onDone} onItemDeleted={onItemDeleted} items={items}></List>

            <Modal show={showModal} onHideModal={onHideModal}> <TodoForm onAddItem={onAddItem}></TodoForm> </Modal>

        </div> /*Container*/
    );
}

export default Todo;