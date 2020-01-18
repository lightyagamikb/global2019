import { HoverCardComponent, SubHeader } from './../components';
import Images from './../components/images'

export default props => {

    return(
        <div className="flex flex-row">
            <div className="w-full h-screen md:w-3/5">
                <SubHeader 

                    // style={{border: '1px solid'}}
                    subHeader = "About us"
                    content = {`
                    The history of this Wyoming plumbing service goes as far back as 1933. These were the times when Samuel Buick created and patented a first ever automatic machine for cleaning pipes and drains. He called it "PlumberPro" and founded a plumbing service with the initial capital which he earned thanks to his invention! Since then, the plumbing service he founded on par with that invention has stayed in that same family's ownership
                    `}
                />
                <div className="flex md:flex-row mt-6 scrolling-auto overflow-auto ">
                    <HoverCardComponent />
                    <HoverCardComponent />
                    <HoverCardComponent />
                </div>
            </div>     
            <div  className="about_us-section hidden md:block md:2/5" style={{width: '40%',height: '100vh'}}>
            </div>       
        </div>
    )
}