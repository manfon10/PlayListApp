import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoUser, getSongsThunk } from '../../redux/actions';
import { SearchBox, TableSongs, ButtonCreateSong, SongModal } from '../../components';
import styles from './home.module.css';

const Home = () => {

    const dispatch = useDispatch();

    const { isOpenModal } = useSelector( state => state.songs );

    useEffect(() => {
        dispatch(getInfoUser());
        dispatch(getSongsThunk());
    }, [dispatch, isOpenModal]);

    return (
        <section>
            <SearchBox styles={styles} />
            <ButtonCreateSong styles={styles} />
            <SongModal styles={styles} />
            <TableSongs styles={styles} />
        </section>
    );
};

export default Home;