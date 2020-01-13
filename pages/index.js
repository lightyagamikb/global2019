import Link from 'next/link';
import Header from './components/Header';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './../styles/index.css';
import SliderComponent from './components/slider';
import FullScreenComponent from './components/containerFullHeight';
import { OurApprochSection } from  './sections/index';


export default () => (
    <div>
        <Header isHome />
        <section className="slider-section">
            {/* <FullScreenComponent> */}
               <div className="w-full">
               {/* <SliderComponent /> */}
               </div>
               <div className="w-full">
                   <OurApprochSection />
               </div>
            {/* </FullScreenComponent> */}
        </section>
    </div>
)
