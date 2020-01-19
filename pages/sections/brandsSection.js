import { SubHeader, Images } from './../components';


export default ({}) => (
    <>
        <SubHeader 
            subHeader="Brands we use"
            content={`
                The history of this Wyoming plumbing service goes as far back as 1933. These were the times when Samuel Buick created and patented a first ever automatic machine for cleaning pipes and drains. He called it "PlumberPro" and founded a plumbing service with the initial capital which he earned thanks to his invention! Since then, the plumbing service he founded on par with that invention has stayed in that same family's ownership`
            }
        />
        <div className="brand-slider flex flex-row justify-between w-full border content-center">
            <div className="brand-slider-img-wrapper w-48">
                <img 
                    src={Images.brand1}
                    style={{
                        width: '100%',
                        height: 'auto',
                        objectFit: 'contain',
                        objectPosition:'center'

                    }}
                />
            </div>
            <div className="brand-slider-img-wrapper w-48">
                <img 
                    src={Images.brand2}
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
            </div>
            <div className="brand-slider-img-wrapper w-48">
                <img 
                    src={Images.brand3}
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
            </div>
            <div className="brand-slider-img-wrapper w-48">
                <img 
                    src={Images.brand4             }
                    style={{
                        width: '100%',
                        height: 'auto'
                    }}
                />
            </div>
        </div>
    </>
)