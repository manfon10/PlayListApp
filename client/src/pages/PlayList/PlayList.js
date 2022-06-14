import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCreatePlayList, ButtonAsingSongPlayList, PlayListsSongs, PlayLists, CreatePlayListModal, AsignSongPlayListModal } from '../../components';
import { getInfoUser, getSongPlayListThunk, getPlayListThunk } from '../../redux/actions';
import styles from './playList.module.css';

const PlayList = () => {

    const dispatch = useDispatch();

    const { isOpenModal, isOpenModalAsign } = useSelector( state => state.playlists );

    useEffect(() => {
        dispatch(getInfoUser());
        dispatch(getPlayListThunk());
        dispatch(getSongPlayListThunk());
    }, [dispatch, isOpenModal, isOpenModalAsign]);

    return (
        <section>
            <div className={styles.container_button_create}>
                <ButtonCreatePlayList />
                <ButtonAsingSongPlayList />
            </div>
            <div>
                <h2 style={{ marginLeft: '20px' }}>Your PlayList with songs</h2>
                <PlayListsSongs styles={styles} />
            </div>
            <div>
                <h2 style={{ marginLeft: '20px' }}>Your PlayList</h2>
                <PlayLists styles={styles} />
            </div>
            <CreatePlayListModal styles={styles} />
            <AsignSongPlayListModal styles={styles}/>
        </section>
    );
};

export default PlayList; 