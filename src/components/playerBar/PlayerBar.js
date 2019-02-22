import React, {Component} from 'react';

class PlayerBar extends Component {
    constructor(props) {
        super(props);
        this.state = {key: 'value'}
    }

    render() {
        return (
            <section className="player-bar">

                <section id="buttons">
                    <button id="previous">
                        <span className="icon ion-md-skip-backward" onClick={() => this.props.changeSong(-1)}></span>
                    </button>
                    <button id="play-pause" onClick={() => this.props.songClick(this.props.currentSong)}>
                        {this.props.isPlaying ? <div className='icon ion-md-pause'></div> : <div className='icon ion-md-arrow-dropright-circle'></div>}
                    </button>
                    <button id="next">
                        <span className="icon ion-md-skip-forward" onClick={() => this.props.changeSong(1)}></span>
                    </button>
                </section>

                <section id="time-control">
                    <div className="current-time">{this.props.currentTime}</div>
                        <input 
                            type="range" 
                            className="seek-bar" 
                            value={(this.props.currentTime / this.props.duration) || 0} 
                            max="1" 
                            min="0" 
                            step="0.01" 
                            onChange={this.props.handleTimeChange}
                            />   
                    <div className="total-time">{this.props.duration}</div> 
                </section>

                <section id="volume-control">
                    <div className="icon ion-md-volume-low"></div>
                    <input type="range" className="seek-bar" value="50" readOnly />
                    <div className="icon ion-md-volume-high"></div>
                </section>

          </section>
        )
    }
}

export default PlayerBar;