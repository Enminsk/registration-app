import React from 'react';
import css from './app.module.css';

import { CheckboxGroup } from './common';
import { GENDER_STATUSES, genderOptions } from './constants';
import { Modal } from './Modal';
import { ModalCtx } from './Ctx';
//import { ErrorBoundary } from './ErrorBoundary';


export class App extends React.Component {
    state = {
        users: {
            login: '',
            password: '',
        },
        errors: {
            login: '',
            password: '',
        },
        choice: GENDER_STATUSES.MALE,
        isModalVisible: false,
    };

    inputChangeHandler = (e) => {
        this.setState((prevState) => ({
            users: {
                ...prevState.users,
                [e.target.name]: e.target.value
            },
            errors: {
                ...prevState.errors,
                [e.target.name]: ''
            },
        }));
    }; 

    changeChoiceHandler = (e) => {
        this.setState({ choice: e.target.value });
    };

    clickHandler = () => {
        const isValid = this.state.users.login.length > 4 && this.state.users.password.length > 5;

        this.setState((prevState) => ({
            isModalVisible: isValid,
            errors: {
                login: this.state.users.login.length > 4 ? "" : 'Коротко',
                password: this.state.users.password.length > 4 ? "" : 'Коротко',
            }
        }))
    };

    render () {
        return <div className={css.app}>
            <h1>SIGN UP</h1>
            <ModalCtx.Provider value={this.state}>
                <form className={css.form}>
                    <label>
                        Login:
                        <input type='text' name='login' value={this.state.login} onChange={this.inputChangeHandler} />
                    </label>
                    {this.state.errors.login && <span>Минимальная длинна поля 5 символов</span>}
                    <label>
                        Password:
                        <input type='Password' name='password' value={this.state.password} onChange={this.inputChangeHandler} />
                    </label>
                    {this.state.errors.password && <span>Минимальная длинна поля 5 символов</span>}
                </form>
                <div>Gender</div>
                <div>
                    <CheckboxGroup options={genderOptions} value={this.state.choice} onChange={this.changeChoiceHandler} />
                </div>
                <label>
                    <input type="checkbox" name="news" defaultChecked />
                    I want to receive newsletters
                </label>
                <button type="button" onClick={this.clickHandler}>GET STARTED</button>
                {this.state.isModalVisible && <Modal />}
            </ModalCtx.Provider>
        </div>
    }
}

