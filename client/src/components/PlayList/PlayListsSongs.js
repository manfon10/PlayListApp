import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteSongPlayList } from '../../redux/actions';

const PlayListsSongs = ({ styles }) => {

    const dispatch = useDispatch();

    const { songsPlayList, playlists } = useSelector( state => state.playlists);

    const deleteSongToPlayListhandle = (idSong) => {
        dispatch(deleteSongPlayList(idSong));
    }

    return (
        <div className={styles.container_playlists}>
            {
                songsPlayList.length === 0 ? (
                    <h3>You don't have playlists with songs, add one!</h3>
                ) : (
                    playlists.map(({ id, name }) => (
                        <div key={id}>
                            <div className={styles.title_playlist}>
                                <h3>{name}</h3>
                            </div>
                            {
                                songsPlayList.map( songPlayList => (
                                    <article className={styles.songs_playlist} key={songPlayList.id} id="div_song">
                                        {
                                            songPlayList.playlist.id === id && (
                                                <>
                                                    <i className="fa-solid fa-music"></i>
                                                    <p>{songPlayList.song.name}</p>
                                                    <i 
                                                        className="fa-solid fa-ban" 
                                                        onClick={() => { 
                                                            deleteSongToPlayListhandle({
                                                                idSong: songPlayList.song.id,
                                                                idPlayList: songPlayList.playlist.id
                                                            })
                                                        }}>
                                                    </i>
                                                </>
                                            )
                                        }
                                    </article>
                                ))
                            }
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default PlayListsSongs; 