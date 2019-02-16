import React from 'react';
import {NavLink} from 'react-router-dom';
import albumData from './../../data/albums.js';

class Library extends React.Component {
    constructor(props) {
        super(props);
        this.state = {albums: albumData};
    }
    render() {
        return (
            <section className='library'>
                {this.state.albums.map( (album, index) => {
                    return (
                        <NavLink to={`/album/${album.slug}`}  key={index}>
                            <img src={album.albumCover} alt={album.title}></img>
                            <div>{album.title}</div>
                            <div>{album.artist}</div>
                            <div>{album.songs.length}</div>
                        </NavLink>
                    )
                })}
            </section>
        )
    }
}

export default Library;