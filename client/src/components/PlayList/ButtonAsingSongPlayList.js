import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsOpenModalPlayAsing } from '../../redux/actions';

const ButtonAsingSongPlayList = () => {

    const dispatch = useDispatch();

    return (
        <>
            <button onClick={ () => dispatch(setIsOpenModalPlayAsing(true)) }>Add song to playlist</button>
        </>
    );
};

export default ButtonAsingSongPlayList;