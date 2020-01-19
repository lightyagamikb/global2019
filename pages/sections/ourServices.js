import { OurServicesCard, SubHeader } from './../components';

const data = [
    'Electrical Wiring', 'Networking', 'Electrical Maintenance', 'Residential Work',
    'Venture Work', 'Automation', 'Electrical Support', 'Electrical Fittings'
]

export default () => {

    return(
        <div>
            <SubHeader 
                invertColors
                subHeader="Our Services"
                content={
                    `The history of this Wyoming plumbing service goes as far back as 1933. These were the times when Samuel Buick created and patented a first ever automatic machine for cleaning pipes and drains. He called it "PlumberPro" and founde`
                }
            />
            <div className="flex flex-row flex-wrap -m-4">
                {
                    data.map((item, index) => {
                        return (
                            <div className="px-4 w-full md:w-1/3 lg:w-1/4 my-4 cursor-pointer" key={index}>
                                <OurServicesCard title={item}/>
                            </div>
                        )
                    })        
                }
            </div>
            <div className="our-services__bottom-action w-full text-right py-3">
                <p className="text-white font-semibold cursor-pointer mt-3">View All Services</p>
            </div>
        </div>
    )
}