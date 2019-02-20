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
            outPut = <div className='icon ion-md-pause'></div>
        } else if (this.props.currentSong === this.props.song) {
            outPut = <div className='icon ion-md-arrow-dropright-circle'></div>
        } else if (this.state.isHover) {
            outPut = <div className='icon ion-md-arrow-dropright-circle'></div>
        }

        return (
            <tr onClick={() => this.props.songClick(this.props.song)} onMouseEnter={() => this.changeHover()} onMouseLeave={() => this.changeHover()}>

                <td>{outPut}</td>
                <td>{this.props.title}</td>
                <td>{`${Math.floor(this.props.song.duration)} sec.`}</td>

            </tr>
        )
    }
}

export default Song;