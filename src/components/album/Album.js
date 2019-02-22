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
            currentTime: 0,
            duration: album.songs[0].duration,
            isPlaying: false
        };

        this.audioElement = document.createElement('audio');
        this.audioElement.src = album.songs[0].audioSrc;
    }

    componentDidMount() {
        this.audioElement.addEventListener('timeupdate', () => {
            this.setState({ currentTime: this.audioElement.currentTime
            });
        });
        this.audioElement.addEventListener('durationchange', () => {
            this.setState({ duration: this.audioElement.duration
            });
        });
        this.audioElement.addEventListener('volumecontrol', () => {
            console.log('sound');
        })
        }
     
    componentWillUnmount() {
        this.audioElement.src = null;
        this.audioElement.removeEventListener('timeupdate', this.eventListeners.timeupdate);
        this.audioElement.removeEventListener('durationchange', this.eventListeners.durationchange);
        }

    handleTimeChange(e) {
        console.log('step')
        const newTime = this.audioElement.duration * e.target.value;
        this.audioElement.currentTime = newTime;
        this.setState({ currentTime: newTime });
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
        if (!atTheTop && !atTheBottom && this.state.currentSong !== false && this.state.isPlaying) {
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
                    currentTime={this.state.currentTime}
                    duration={this.state.duration}
                    handleTimeChange={(e) => this.handleTimeChange(e)}
                     />
            </section>
        );
    }
}

export default Album;