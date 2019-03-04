import images from './../../../data/images'

const CSS = `
    .intro-image {
        background: linear-gradient(90deg, grey, transparent 50%),
            linear-gradient(90deg, transparent, black 100%),
            linear-gradient(black 0%, transparent),
            url(${images.landingImage1}) no-repeat center;
        width: 100%;
        background-position: left;
        background-size: 50%;
        background-repeat: no-repeat;
    }

    .landing-image-1 {
        background: linear-gradient(90deg, transparent 50%, grey),
            linear-gradient(90deg, black 0%, transparent),
            linear-gradient(black 0%, transparent 90%),
            url(${images.landingImage2});
        background-position: bottom right;
        background-repeat: no-repeat;
        background-size: 50%;
    }

    .landing-image-2 {
        background: linear-gradient(90deg, grey, transparent 50%),
            linear-gradient(90deg, transparent, black 100%),
            linear-gradient(black 0%, transparent),
            url(${images.landingImage3});
        background-position: bottom left;
        background-repeat: no-repeat;
        background-size: 50%;
    }

    .landing-image-3 {
        background: linear-gradient(90deg, transparent 50%, grey),
            linear-gradient(90deg, black 0%, transparent),
            linear-gradient(black 0%, transparent),
            url(${images.landingImage4});
        background-position: bottom right;
        background-repeat: no-repeat;
        background-size: 50%;
    }

    .final-image {
        background: linear-gradient( transparent 70%, black 100%),
            linear-gradient(90deg, black 10%, transparent, black 90%),
            url(${images.landingImage5});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 75vw;
    }

    @media (min-width: 600px) {

        .landing-image-3 {
            background: linear-gradient(90deg, transparent 50%, grey),
                linear-gradient(90deg, black 0%, transparent),
                linear-gradient(black 0%, transparent),
                url(${images.landingImage4});
            background-position: center right;
            background-repeat: no-repeat;
            background-size: 50%;
        }

    }

    @media (min-width: 1200px) {

        .landing-image-1 {
            background: linear-gradient(90deg, transparent 50%, grey),
                linear-gradient(90deg, black 0%, transparent),
                linear-gradient(black 0%, transparent 90%),
                url(${images.landingImage2});
            background-position: center right;
            background-repeat: no-repeat;
            background-size: 50%;
        }

        
        .landing-image-2 {
            background: linear-gradient(90deg, grey, transparent 50%),
                linear-gradient(90deg, transparent, black 100%),
                linear-gradient(black 0%, transparent),
                url(${images.landingImage3});
            background-position: center left;
            background-repeat: no-repeat;
            background-size: 50%;
        }
    }
`

export default CSS