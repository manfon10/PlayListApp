import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/actions';
import LoginInfo from './LoginInfo';
import styles from './login.module.css';

const LoginForm = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const loginHandle = data => {
        dispatch(loginThunk(data));
    }

    return (
        <div className={styles.container_login}>
            <div className={styles.name_app}>
                <h3><i className="fa-solid fa-music"></i> Play List App</h3> 
            </div>
            <form onSubmit={handleSubmit(loginHandle)} className={styles.form_login}>
                <p>Email</p>
                <input 
                    type="text"
                    {...register("email", { required: true })}
                />
                <p>Password</p>
                <input 
                    type="password"
                    {...register("password", { required: true })}
                />
                <Link to={'/signup'}>
                    Create an account!
                </Link>
                <button>Log In</button>
            </form>
            <LoginInfo styles={styles} />
        </div>
    );
};

export default LoginForm;