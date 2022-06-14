import React, { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector  } from 'react-redux';
import { useForm } from 'react-hook-form';
import { setIsCloseModalPlayAsing, addSognPlayListThunk, getSongsThunk } from '../../redux/actions';

const AsignSongPlayListModal = ({ styles }) => {

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const { isOpenModalAsign, playlists } = useSelector( state => state.playlists );
    const { songs } = useSelector( state => state.songs );

    useEffect(() => {
        dispatch(getSongsThunk());
    }, [dispatch, isOpenModalAsign]);

    const closeModal = () => {
        dispatch(setIsCloseModalPlayAsing(false));
    }

    const asignSongPlayListHandle = (data) => {
        dispatch(addSognPlayListThunk(data));
        dispatch(setIsCloseModalPlayAsing(false));
    }

    return (
        <Modal
            isOpen={ !!isOpenModalAsign }
            onRequestClose={ closeModal }
            overlayClassName={ styles.modal_background }
            className={ styles.modal_playlist_create }
            ariaHideApp={false}
        >
            <form onSubmit={handleSubmit(asignSongPlayListHandle)} className={styles.form_playlist}>
                <h3>Create PlayList</h3>
                <p>Playlist</p>
                <select {...register("idPlayList", { required: true })}>
                    {
                        playlists.map( ({ id, name }) => (
                            <option key={id} value={id}>{name}</option>
                        ))
                    }
                </select>
                <p>Song</p>
                <select {...register("idSong", { required: true })}>
                    {
                        songs.map(({ id, name }) => (
                            <option key={id} value={id}>{name}</option>
                        ))
                    }
                </select>
                <button>Asign</button>
            </form>
        </Modal>
    );
};

export default AsignSongPlayListModal;