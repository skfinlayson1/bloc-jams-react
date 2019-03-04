import images from './../../../data/images';

const CSS = `
    .image-and-info {
        width: 80vw;
        margin: auto;
        padding: 1.5rem;
        background-image: radial-gradient(circle, transparent 50%, black),
            url(${images.smallScreenBackground});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    @media (min-width: 1000px) {

        #album-info {
            display: flex;
            background-image: url(${images.largeScreenBackground});
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            height: calc(99vh - 80px);
        }

    }
`

export default CSS;