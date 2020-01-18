import Link from 'next/link';
import {Header, SubHeader} from './components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './../styles/index.css';
import SliderComponent from './components/slider';
import FullScreenComponent from './components/containerFullHeight';
import { OurApprochSection, Poster, OurServices } from  './sections/index';


export default () => (
    <div>
        <Header isHome />
        <section className="slider-section">
            {/* <FullScreenComponent> */}
               <div className="w-full">
               {/* <SliderComponent /> */}
               </div>                          
            {/* </FullScreenComponent> */}
        </section>   
        <section>
            <div className="w-full max-w-full md:max-w-3xl lg:max-w-6xl m-auto p-5">
                <OurApprochSection />
            </div>  
        </section> 
        <section className="">
            <Poster />    
        </section>   
        <section className="our-services-section bg-gray-900">
            <div className="w-full md:max-w-3xl lg:max-w-6xl m-auto p-5">
                <OurServices />
            </div>
        </section>
    </div>
)
