import './styles.css';
import React, {useState} from 'react';
import { connect } from 'react-redux';

const Login = ({onSubmit}) => {
    const [user,changeUser] = useState('')
    const [password,changePassword] = useState('')
    const [passwordConfirm,changePasswordComfirm] = useState('')
    const [email,changeEmail] = useState('')

    return (
        <div className="signin">
            <input
            className="userSignUp"
            type="text"
            placeholder="username"
            value={user}
            onChange={e => changeUser(e.target.value)}
            />
            <input
                className="email"
                type="text"
                placeholder="email"
                value={email}
                onChange={e=>changeEmail(e.target.value)}
            />
            <input
                className="passwordSignUp"
                type="password"
                placeholder="password"
                value={password}
                onChange={e=>changePassword(e.target.value)}
            />
            <input
                className="passwordConfirm"
                type="password"
                placeholder="password confirmation"
                value={passwordConfirm}
                onChange={e=>changePasswordComfirm(e.target.value)}
            />
            <button className="signUP_button" type="submit" onClick={
                () => onSubmit(user,password)
            }>
                {'LOGIN'}
            </button>
        </div>
    )
}

export default connect(
    undefined,
    undefined
)(Login)
