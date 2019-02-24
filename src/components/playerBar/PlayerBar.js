import React from 'react';

const PlayerBar = (props) => {

    return (
        <section className="player-bar">

            <section id="buttons">
                <button id="previous">
                    <span className="icon ion-md-skip-backward" onClick={() => props.changeSong(-1)}></span>
                </button>
                <button id="play-pause" onClick={() => props.songClick(props.currentSong)}>
                    {props.isPlaying ? <div className='icon ion-md-pause'></div> : <div className='icon ion-md-arrow-dropright-circle'></div>}
                </button>
                <button id="next">
                    <span className="icon ion-md-skip-forward" onClick={() => props.changeSong(1)}></span>
                </button>
            </section>

            <section id="time-control">
                <div className="current-time">{props.formatTime(props.currentTime)}</div>
                    <input 
                        type="range" 
                        className="seek-bar" 
                        value={(props.currentTime / props.duration) || 0} 
                        max="1" 
                        min="0" 
                        step="0.01" 
                        onChange={props.handleTimeChange}
                        />   
                <div className="total-time">{props.formatTime(props.duration)}</div> 
            </section>

            <section id="volume-control">
                <div className="icon ion-md-volume-low"></div>
                    <input 
                        type="range" 
                        className="seek-bar" 
                        value={props.volume}
                        max='1'
                        min='0'
                        step='0.01'
                        onChange={props.handleVolumeChange}
                            />
                <div className="icon ion-md-volume-high"></div>
            </section>

        </section>
    )
}


export default PlayerBar;