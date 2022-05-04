import React from 'react';
import ReactDOM from 'react-dom';
import css from './modal.module.css';
import { ModalCtx } from './Ctx';


export class Modal extends React.Component {
    static contextType = ModalCtx;
    state = { isModalVisible: true };

    componentDidMount () {
        const body = document.querySelector('body');
        body.addEventListener('keydown', this.keyEscape);
    };

    componentWillUnmount() {
        const body = document.querySelector('body');
        body.removeEventListener('keydown', this.keyEscape);
    };

    keyEscape = (e) => {
        if (e.code === 'Escape') {
            this.setState.close()
        };
    };

    modalCloseHandler = () => { this.setState({ isModalVisible: false }) };

    render() {
        const body = document.querySelector('body');
        const modal = (
            <div className={css.modal}>
                <span>login:{this.context.users.login}</span>
                <br/>
                <span>password:{this.context.users.password}</span>
                <button onClick={this.modalCloseHandler}>Ok</button>
            </div>
        );
        return ReactDOM.createPortal(modal, body);
    }
};