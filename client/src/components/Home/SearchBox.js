import React from 'react';
import { useDispatch  } from 'react-redux';
import { useForm } from 'react-hook-form';
import { filterSongThunk } from '../../redux/actions';

const SearchBox = ({ styles }) => {

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm();

    const searchHandle = (data) => {
        dispatch(filterSongThunk(data.phrase));
    }

    return (
        <div className={styles.container_search}>
            <form onSubmit={handleSubmit(searchHandle)}>
                <input 
                    type="text"
                    placeholder="Write some word"
                    {...register("phrase", { required: true } )}
                    className={styles.input_search}
                />
            </form>
        </div>
    );
};

export default SearchBox;