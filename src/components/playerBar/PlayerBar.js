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
                    <div className="current-time">–:––</div>
                    <input type="range" className="seek-bar" value="0" readOnly />
                    <div className="total-time">–:––</div>
                </section>
                <section id="volume-control">
                    <div className="icon ion-volume-low"></div>
                    <input type="range" className="seek-bar" value="80" readOnly />
                    <div className="icon ion-volume-high"></div>
                </section>
          </section>
        )
    }
}

export default PlayerBar;