import Link from 'next/link';
import {Header, SubHeader} from './components';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './../styles/index.css';
import SliderComponent from './components/slider';
import FullScreenComponent from './components/containerFullHeight';
import { OurApprochSection, Poster, OurServices, Brands, WorkingMechanism } from  './sections/index';


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
        <section >
            <Poster />    
        </section>   
        <section className="our-services-section bg-gray-900">
            <div className="w-full md:max-w-3xl lg:max-w-6xl m-auto p-5">
                <OurServices />
            </div>
        </section>
        <section>
            <div className="need-help-wrapper my-16">
                <h4 className='text-white text-3xl text-center font-semibold bg-primary py-2'>
                    Need any help ? Call 7032278270
                </h4>
            </div>
        </section>
        <section>
            <div className="brands-use w-full md:max-w-3xl lg:max-w-6xl m-auto p-5 border-4 pt-0">
                <Brands />
            </div>
        </section>
        <section className="bg-gray-900">
            <div className="container mx-auto py-6">
                <WorkingMechanism />
            </div>
        </section>
    </div>
)
