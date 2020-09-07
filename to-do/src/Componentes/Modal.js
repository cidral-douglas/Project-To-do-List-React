import React from 'react';
import Card from './Card';

function Modal(props) {

    function hideModal(event){
        let target = event.target;
        if(target.id === 'modal'){
            props.onHideModal()
        }
    }

    return(
        <div id="modal" onClick={hideModal} className={props.show?"modal": "modal hide"}>
            <Card className="cardModal">
                <h2> Add your new task!</h2>
                {props.children}
            </Card>
        </div>
    )
}

export default Modal;