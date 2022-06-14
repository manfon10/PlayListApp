import React from 'react';
import { useSelector  } from 'react-redux';

const PlayLists = ({ styles }) => {

    const { playlists } = useSelector( state => state.playlists);

    return (
        <div className={styles.container_playlists}>
            {
                playlists.length === 0 ? (
                    <h3>There are no playlists created, create one!</h3>
                ) : (
                    playlists.map(({ id, name, status}) => (
                        <div key={id} className={styles.status_playlist}>
                            {
                                status === "deleted" ? (
                                    <i className="fa-solid fa-ban" style={{color: "red"}}></i>
                                ) : (
                                    <i className="fa-solid fa-circle-check" style={{color: "green"}}></i>
                                )
                            }
                            <h3>{name}</h3>
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default PlayLists;