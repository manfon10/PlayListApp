import React from 'react';
import { useDispatch } from 'react-redux';
import { setIsOpenModalPlay } from '../../redux/actions';

const ButtonCreatePlayList = () => {

    const dispatch = useDispatch();

    return (
        <>
            <button onClick={ () => dispatch(setIsOpenModalPlay(true)) }>Create PlayList</button>
        </>
    );
};

export default ButtonCreatePlayList;