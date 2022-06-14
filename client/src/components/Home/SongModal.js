import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector  } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setIsCloseModal, createSongThunk } from '../../redux/actions';

const SongModal = ({ styles }) => {

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const { isOpenModal } = useSelector( state => state.songs );

    const closeModal = () => {
        dispatch(setIsCloseModal(false));
    }

    const createSongHandle = (data) => {
        dispatch(createSongThunk(data));
        dispatch(setIsCloseModal(false));
    }

    return (
        <Modal
            isOpen={ !!isOpenModal }
            onRequestClose={ closeModal }
            overlayClassName={ styles.modal_background }
            className={ styles.modal_song_create }
            ariaHideApp={false}
        >
            <h3>Create Song</h3>
            <form onSubmit={handleSubmit(createSongHandle)} className={styles.form_song}>
                <p>Name Song</p>
                <input 
                    type="text"
                    {...register("name", { required: true })}
                />
                <p>Type Song</p>
                <input 
                    type="text"
                    {...register("type", { required: true })}
                />
                <button>Create</button>
            </form>
        </Modal>
    );
};

export default SongModal;