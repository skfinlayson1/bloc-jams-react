import React from 'react';
import albumData from './../../data/albums.js';
import Song from './song';
import PlayerBar from './../playerBar';

class Album extends React.Component {
    constructor(props) {
        super(props);

        const album = albumData.find( album => {
            return album.slug === this.props.match.params.slug
        });

        this.state = {
            album: album,
            currentSong: false,
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
        if (this.state.currentSong === false) {
            this.setState( prevState => { return {currentSong: prevState.album.songs[0]}})
        }
        if (this.state.isPlaying && isSameSong) {
            this.pause()
        } else {
            if (!isSameSong) {this.setSong(song)}
            this.play()
        }
    }

    changeSong = (delta) => {
        const num = this.state.album.songs.length - 1;
        const songIndex = this.state.album.songs.findIndex(song => this.state.currentSong === song);
        const atTheTop = songIndex === 0 && delta === -1
        const atTheBottom = songIndex === num && delta === 1
        if (atTheTop === false && atTheBottom === false && this.state.currentSong !== false && this.state.isPlaying) {
            this.setSong(this.state.album.songs[songIndex + delta])
            this.audioElement.play();
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
                <PlayerBar
                    isPlaying={this.state.isPlaying}
                    currentSong={this.state.currentSong}
                    songClick={this.handleSongClick}
                    changeSong={this.changeSong}

                     />
            </section>
        );
    }
}

export default Album;