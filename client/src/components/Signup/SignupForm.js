import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signupThunk } from '../../redux/actions';
import styles from '../Login/login.module.css';

const SignupForm = () => {

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const registerHandler = data => {
        dispatch(signupThunk(data));
    }

    return (
        <div className={styles.container_login}>
            <div className={styles.name_app}>
                <h3><i className="fa-solid fa-calendar"></i> PlayList App</h3> 
            </div>
            <form onSubmit={handleSubmit(registerHandler)} className={styles.form_login}>
                <p>Name</p>
                <input 
                    type="text"
                    {...register("name", { required: true })}
                />
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
                <Link to={'/login'}>
                    Back to login!
                </Link>
                <button>Sign Up</button>
            </form>
        </div>
    );
};

export default SignupForm;
