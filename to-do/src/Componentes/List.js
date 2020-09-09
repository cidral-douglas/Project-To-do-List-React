import React from 'react';
import Card from './Card';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem, changeDone } from '../Actions/listActions';

function List(props) {

    const items = useSelector(state => state)
    const dispatch = useDispatch();

    return (
        <ul>
            {items.map(item => 
                <li key={item.id}> 
                    <Card className={item.done?"done item " : "item"}>
                        {item.text} 
                        <div>
                            <button onClick={() => { dispatch(changeDone(item.id)) }} className={item.done?"doneBtn" : ""}> OK </button>
                            <button onClick={() => { dispatch(deleteItem(item.id)) }} > X </button>
                        </div>
                    </Card>
                </li>)}
        </ul>
    );
}

export default List;