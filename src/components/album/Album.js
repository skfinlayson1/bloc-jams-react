import React from 'react';
import albumData from './../../data/albums.js';
import Song from './song';

class Album extends React.Component {
    constructor(props) {
        super(props);

        const album = albumData.find( album => {
            return album.slug === this.props.match.params.slug
        });

        this.state = {
            album: album,
            currentSong: Array,
            isPlaying: false
        };

        this.audioElement = document.createElement('audio');
        this.audioElement.src = album.songs[0].audioSrc;
    }

    play() {
        this.audioElement.play();
        this.setState( prevState => ({isPlaying: prevState.isPlaying = true}))
    }

    pause() {
        this.audioElement.pause()
        this.setState( prevState => ({isPlaying: prevState.isPlaying = false}))
    }

    setSong(song) {
        this.audioElement.src = song.audioSrc;
        this.setState( prevState => ({currentSong: prevState.currentSong = song}))
    }

    handleSongClick = (song) => {
        const isSameSong = this.state.currentSong === song;
        if (this.state.isPlaying && isSameSong) {
            this.pause()
        } else {
            if (!isSameSong) {this.setSong(song)}
            this.play()
        }
    }


    render() {
        return (
            <section id="album-info">
                <img id="album-cover-art" src={this.state.album.albumCover} alt={this.state.album.title}/>
                <div className="album-details">
                    <h1 id="album-title">{this.state.album.title}</h1>
                    <h2 className="artist">{this.state.album.artist}</h2>
                    <div id="release-info">{this.state.album.releaseInfo}</div>
                </div>
                <table id="song-list">
                    <colgroup>
                        <col id="song-number-column" />
                        <col id="song-title-column" />
                        <col id="song-duration-column" />
                    </colgroup>  
                    <tbody>
                        {this.state.album.songs.map( (song,index) => {
                            return (
                                <Song 
                                    key={index} 
                                    song={song} 
                                    num={index + 1} 
                                    songClick={this.handleSongClick}
                                    currentSong={this.state.currentSong}
                                    isPlaying={this.state.isPlaying}    
                                     />
                            )
                        })}
                    </tbody>
                </table>
            </section>
        )
    }
}

export default Album;