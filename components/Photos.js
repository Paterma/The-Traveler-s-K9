import React from "react";
import '@components/Photos.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import photo1 from '@components/photo1.PNG'
import photo2 from '@components/photo2.PNG'
import photo3 from '@components/photo3.PNG'


function Photos() {

    return (
        <Carousel autoPlay="true" infiniteLoop="true">
        <div>
                    <img src={photo1} />
                    <p className="legend">Airbus</p>
                </div>
                <div>
                    <img src={photo2} />
                    <p className="legend">The Gang ❤️</p>
                </div>
                <div>
                    <img src={photo3} />
                    <p className="legend">Do you even climb?</p>
                </div>
    </Carousel>
    )
    }
    
    export default Photos;
