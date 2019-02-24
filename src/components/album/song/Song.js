import React, {Component} from 'react';

class Song extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHover: false,
        }
    }
    

    changeHover() {
        this.setState(prevState => {
            return {isHover: !prevState.isHover}
        })
    }


    render() {
        let outPut = this.props.num;
        
        if (this.props.currentSong === this.props.song && this.props.isPlaying) {
            outPut = <span className='icon ion-md-pause'></span>
        } else if (this.props.currentSong === this.props.song) {
            outPut = <span className='icon ion-md-arrow-dropright-circle'></span>
        } else if (this.state.isHover) {
            outPut = <span className='icon ion-md-arrow-dropright-circle'></span>
        }

        return (
            <tr onClick={() => this.props.songClick(this.props.song)} onMouseEnter={() => this.changeHover()} onMouseLeave={() => this.changeHover()}>

                <td>{outPut}</td>
                <td>{this.props.title}</td>
                <td>{this.props.formatTime(this.props.song.duration)}</td>

            </tr>
        )
    }
}

export default Song;