import React from 'react';
import CSS from './landingCSS';

class Landing extends React.Component {
    render() {

        return (
            <section className="landing">

                <style>{CSS}</style>

                <div className='intro-background'>
                    <div className='intro-image'>
                        <div className='cover'>
                            <h1 className='intro-text'>Welcome To Bloc Jams</h1>
                        </div>
                    </div>
                </div>

                <section className="selling-points">
                    <div className="point-1">
                        <div className='landing-image-1'>
                            <div className='landing-cover'>
                                <h2 className="point-title">Choose your music</h2>
                                <p className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</p>
                            </div>
                        </div>
                    </div>
                    <div className="point-2">
                        <div className='landing-image-2'>
                            <div className='landing-cover'>
                                <h2 className="point-title">Unlimited, streaming, ad-free</h2>
                                <p className="point-description">No arbitrary limits. No distractions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="point-3">
                        <div className='landing-image-3'>
                            <div className='landing-cover'>
                                <h2 className="point-title">Mobile enabled</h2>
                                <p className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='last-statement'>
                    <div className='final-image'>
                        <div className='final-cover'>
                            <h1 className='final-message'>Now go turn the music up!</h1>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Landing;