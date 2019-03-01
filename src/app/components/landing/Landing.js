import React from 'react';

class Landing extends React.Component {
    render() {
        return (
            <section className="landing">

                <div className='introBackground'>
                    <div className='introImage'>
                        <div className='cover'>
                            <h1 className='introText'>Welcome To Bloc Jams</h1>
                        </div>
                    </div>
                </div>

                <section className="selling-points">
                    <div className="point1">
                        <div className='landingImage1'>
                            <div className='landingCover'>
                                <h2 className="point-title">Choose your music</h2>
                                <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
                            </div>
                        </div>
                    </div>
                    <div className="point2">
                        <div className='landingImage2'>
                            <div className='landingCover'>
                                <h2 className="point-title">Unlimited, streaming, ad-free</h2>
                                <p className="point-description">No arbitrary limits. No distractions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="point3">
                        <div className='landingImage3'>
                            <div className='landingCover'>
                                <h2 className="point-title">Mobile enabled</h2>
                                <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='lastStatement'>
                    <div className='finalImage'>
                        <div className='finalCover'>
                            <h1 className='finalMessage'>Now go turn the music up!</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Landing;