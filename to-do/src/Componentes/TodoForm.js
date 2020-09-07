import React, { useState } from 'react';

function TodoForm(props) {

    const [text,setText] = useState("");

    //FUNÇÃO QUE RECEBE O QUE FOI DIGITADO NO INPUT//
    function handleChange(event) {
        let t = event.target.value;
        setText(t);
    }

    //FUNÇÃO QUE ADICIONA OS ITENS//
    function addItem(event) {
        event.preventDefault();
        if(text){
        props.onAddItem(text);
        setText("");
        }
    }
    
    return (
        <form>
            <input onChange={handleChange} type="text" value={text} placeholder="Type here..."></input>
            <button onClick={addItem}>Add</button>
        </form>
    );
}

export default TodoForm;
    