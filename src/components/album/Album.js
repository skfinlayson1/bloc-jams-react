import React from 'react';

class Album extends React.Component {
    render() {
        return (
            <section className='album'>
                {this.props.match.params.slug} Album here
            </section>
        )
    }
}

export default Album;