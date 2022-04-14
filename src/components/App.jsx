import React from 'react';
import { CheckboxGroup } from './common';
import { GENDER_STATUSES, genderOptions } from './constants';
import { Modal } from './Modal';
//import { ErrorBoundary } from './ErrorBoundary';


export class App extends React.Component {
    state = {
        login: '',
        password: '',
        choice: GENDER_STATUSES.MALE,
        isModalVisible: false,
    }


    changeChoiceHandler = (e) => {
        this.setState({ choice: e.target.value });
    }

    dengerError = () => {
        if (this.state.login.length < 5) {
            return <h3>Минимальная длинна поля 5 символов</h3>;
                }
        return this.setState({ isModalVisible: true }) 
    }

    render () {
        const { login, password, choice } = this.state;

        return <div>
            <h1>SIGN UP</h1>
            <form>
                <label>
                    Login:
                    <input type="text" value={login} onChange={(e) => this.setState({ login: e.target.value })} />
                </label>
                {this.state.login && <span>Минимальная длинна поля 5 символов</span>}
                <label>
                    Password:
                    <input type="Password" value={password} onChange={(e) => this.setState({ password: e.target.value })} />
                </label>
                {this.state.password && <span>Минимальная длинна поля 5 символов</span>}
                <h4>Gender</h4>
                <div>
                    <CheckboxGroup options={genderOptions} value={choice} onChange={this.changeChoiceHandler} />
                </div>
                <label>
                    <input type="checkbox" name="news" />
                    I want to receive newsletters
                </label>
                <button type="button" onClick={this.dengerError}>GET STARTED</button>
                {this.state.isModalVisible && <Modal />}
            </form>
        </div>
    }
}

