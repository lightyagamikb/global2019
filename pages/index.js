import Link from 'next/link';
import Header from './components/Header';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './../styles/index.css';
import SliderComponent from './components/slider';
import FullScreenComponent from './components/containerFullHeight';


export default () => (
    <div>
        <Header isHome />
        <section className="slider-section">
            {/* <FullScreenComponent> */}
               <div className="w-full">
               <SliderComponent />
               </div>
            {/* </FullScreenComponent> */}
        </section>
    </div>
)
