import React from 'react';
import {NavLink} from 'react-router-dom';
import albumData from './../../../data/albums.js';

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
                            <div className='imageInfo'>
                                <img src={album.albumCover} alt={album.title}></img>
                                <div className='title'>{album.title}</div>
                                <div className='artist'>{album.artist}</div>
                                <div className ='songCount'>{`${album.songs.length} songs`}</div>
                            </div>
                        </NavLink>
                    )
                })}
            </section>
        )
    }
}

export default Library;