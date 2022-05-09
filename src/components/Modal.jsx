import React from 'react';
import ReactDOM from 'react-dom';
import css from './modal.module.css';
import { ModalCtx } from './Ctx';


export class Modal extends React.Component {
    static contextType = ModalCtx;

    keyModalCloseHandler = (e) => {
        if (e.code === 'Escape') {
            this.modalCloseHandler()
        };
    };

    componentDidMount() {
        const body = document.querySelector('body');
        body.addEventListener('keydown', this.keyModalCloseHandler);
    };

    componentWillUnmount() {
        const body = document.querySelector('body');
        body.removeEventListener('keydown', this.keyModalCloseHandler);
    };

    modalCloseHandler = () => {
        this.props.onClose()
    }

    render() {
        const body = document.querySelector('body');
        const modal = (
            <div className={css.modal}>
                <h3 className={css.title}>Поздравляем, Вы успешно зарегистрировались!</h3>
                <span>Ваш login:{this.context.users.login}</span>
                <br/>
                <span>Ваш password:{this.context.users.password}</span>
                <br/>
                <button onClick={this.modalCloseHandler}>Ok</button>
            </div>
        );
        return ReactDOM.createPortal(modal, body);
    }
};