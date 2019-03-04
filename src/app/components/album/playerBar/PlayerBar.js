import React from 'react';

class PlayerBar extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    displayControls = () => {
        console.log('it worked', this.state.show)
        this.setState( prevState => {
            return {show: !prevState.show}
        })
    }

    render() {
        
        const showControls = `
        #song-list {margin-bottom: 14.5rem}
        .player-bar {height: auto} 
        #small-screen-time, #small-screen-volume {display: none}
        `
        
        return (
            <section className="player-bar">

                <style>{this.state.show ? showControls : null}</style>

                <section id="buttons">

                    <div id='small-screen-time' onClick={() => this.displayControls()}>
                        <div>{this.props.formatTime(this.props.currentTime)}</div>
                        <div>{this.props.formatTime(this.props.duration)}</div>
                    </div>

                    <button id="previous">
                        <span className="icon ion-md-skip-backward" onClick={() => this.props.changeSong(-1)}></span>
                    </button>
                    <button id="play-pause" onClick={() => this.props.songClick(this.props.currentSong)}>
                        {this.props.isPlaying ? <div className='icon ion-md-pause'></div> : <div className='icon ion-md-arrow-dropright-circle'></div>}
                    </button>
                    <button id="next">
                        <span className="icon ion-md-skip-forward" onClick={() => this.props.changeSong(1)}></span>
                    </button>

                    <div id='small-screen-volume' className="icon ion-md-volume-high" onClick={() => this.displayControls()}></div>

                </section>
    
                <section id="time-control">
                    <div className="current-time">{this.props.formatTime(this.props.currentTime)}</div>
                        <input 
                            type="range" 
                            className="seek-bar-time" 
                            value={(this.props.currentTime / this.props.duration) || 0} 
                            max="1" 
                            min="0" 
                            step="0.01" 
                            onChange={this.props.handleTimeChange}
                            />   
                    <div className="total-time">{this.props.formatTime(this.props.duration)}</div> 
                </section>
    
                <section id="volume-control">
                    <div id='volume-down' className="icon ion-md-volume-low"></div>
                        <input 
                            type="range" 
                            className="seek-bar-volume" 
                            value={this.props.volume}
                            max='1'
                            min='0'
                            step='0.01'
                            onChange={this.props.handleVolumeChange}
                                />
                    <div onClick={() => this.displayControls()} id='volume-up' className="icon ion-md-volume-high"></div>
                </section>

                <span className='hide' onClick={() => this.displayControls()}>Hide</span>
    
            </section>
        )
    }
}

export default PlayerBar;