import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector  } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setIsCloseModalPlay, createPlayListThunk } from '../../redux/actions';

const CreatePlayListModal = ({ styles }) => {

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const { isOpenModal } = useSelector( state => state.playlists );
    const { userInfo } = useSelector( state => state.user);

    const closeModal = () => {
        dispatch(setIsCloseModalPlay(false));
    }

    const createPlayListHandle = ({ name }) => {
        dispatch(createPlayListThunk({ name, idUser: userInfo.id }));
        dispatch(setIsCloseModalPlay(false));
    }

    return (
        <Modal
            isOpen={ !!isOpenModal }
            onRequestClose={ closeModal }
            overlayClassName={ styles.modal_background }
            className={ styles.modal_playlist_create }
            ariaHideApp={false}
        >
            <form onSubmit={handleSubmit(createPlayListHandle)} className={styles.form_playlist}>
                <h3>Create PlayList</h3>
                <p>Name Playlist</p>
                <input 
                    type="text"
                    {...register("name", { required: true })}
                />
                <button>Create</button>
            </form>
        </Modal>
    );
};

export default CreatePlayListModal;