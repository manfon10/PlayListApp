import React from 'react';
import { useSelector  } from 'react-redux';

const TableSongs = ({ styles }) => {

    const { songs } = useSelector( state => state.songs);

    return (
        <div className={styles.container_table_songs}>
            {
                songs.length === 0 ? (
                    <div><h3>There are no songs created, create one!</h3></div>
                ) : (
                    <table className={styles.table_songs}>
                    <thead>
                        <tr className={styles.thead_tr}>
                            <th style={{ textAlign: 'left'}}>ID</th>
                            <th>Name Song</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            songs.map(({ id, name, type }) => (
                                <tr key={id} className={styles.tbody_tr}>
                                    <td>{id}</td>
                                    <td>{name}</td>
                                    <td>{type}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                )
            }
        </div>
    );
};

export default TableSongs;