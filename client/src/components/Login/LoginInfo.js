import React from 'react';
import { useSelector } from 'react-redux';

const LoginInfo = ({ styles }) => {

    const { infoUser, userError } = useSelector( state => state.user );

    return (
        <>
            {
                infoUser ? (
                    <p className={styles.message_info}>{infoUser}</p>
                ) : userError && (
                    <p className={styles.message_error}>{userError}</p>
                )
            }
        </>
    );
};

export default LoginInfo;