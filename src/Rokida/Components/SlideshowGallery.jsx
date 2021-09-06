import React, { useState } from 'react';
import { Row } from 'react-bootstrap';

const SlideshowGallery = (props) => {
    const [slideIndex, setSlideIndex] = useState(0)

    return (
        <Row className="detail-image clear-padding">
            <div className="main-image">
                {props.items.map((item, index) => (
                    <img className={slideIndex === index ? '' : 'display-none'} src={item.src} alt={item.alt} key={"SlideshowGallery-slide" + index}/>
                ))}
            </div>
            <div className="mini-image">
                <ul>
                    {props.items.map((item, index) => (
                        <li 
                            key={"SlideshowGallery-mini" + index}
                            onClick={ () => setSlideIndex(index) }
                            className={ slideIndex === index ? 'slide-actived' : '' }
                        ><img src={item.src} alt={item.alt}/></li>
                    ))}
                </ul>
            </div>
        </Row>
    )
}

export default React.memo(SlideshowGallery)