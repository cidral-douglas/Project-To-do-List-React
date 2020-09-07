import React from 'react';
import Card from './Card';

function List(props) {


    return (
        <ul>
            {props.items.map(item => 
                <li key={item.id}> 
                    <Card className={item.done?"done item " : "item"}>
                        {item.text} 
                        <div>
                            <button onClick={() => {props.onDone(item)}} className={item.done?"doneBtn" : ""}> OK </button>
                            <button onClick={() => {props.onItemDeleted(item)}} > X </button>
                        </div>
                    </Card>
                </li>)}
        </ul>
    );
}

export default List;