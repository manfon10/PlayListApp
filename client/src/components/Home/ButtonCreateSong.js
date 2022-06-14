import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsOpenModal } from '../../redux/actions';

const ButtonCreateSong = ({ styles }) => {

    const dispatch = useDispatch();

    return (
        <div className={styles.container_button_song}>
            <button onClick={ () => dispatch(setIsOpenModal(true)) }>Create Song</button>
        </div>
    );
};

export default ButtonCreateSong;