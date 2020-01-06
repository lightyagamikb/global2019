import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';

class CarouselComponent extends Component {
    render() {
        return (
            <Carousel
            showThumbs={false}
            infiniteLoop
            autoPlay
            dynamicHeight
            showStatus={false}
            >
                <div>
                    <img src="https://www.searchenginejournal.com/wp-content/uploads/2018/07/The-Smart-Marketer%E2%80%99s-Guide-to-Google-Alerts-760x400.png" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://www.searchenginejournal.com/wp-content/uploads/2018/07/The-Smart-Marketer%E2%80%99s-Guide-to-Google-Alerts-760x400.png" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="https://www.searchenginejournal.com/wp-content/uploads/2018/07/The-Smart-Marketer%E2%80%99s-Guide-to-Google-Alerts-760x400.png" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        );
    }
};

export default CarouselComponent;