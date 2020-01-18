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
            <div className="flex flex-row flex-wrap">
                {
                    
                }
            </div>
        </div>
    )
}