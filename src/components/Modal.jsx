import React from 'react';
import ReactDOM from 'react-dom';

export const Modal = () => {
    const modal = (
        <div>
            <span>hkhjkhjkhjkhjkhjk</span>
        </div>
    )
    const body = document.querySelector('body')
   
    return ReactDOM.createPortal(modal, body)
}