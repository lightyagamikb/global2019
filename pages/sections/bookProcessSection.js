import { Images, HoverCardComponent} from './../components';


export default () => (
    <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col w-100 lg:w-1/3 max-w-sm justify-center" style={{paddingLeft: 48}}>
            <h4 className="text-white text-3xl mb-3 text-semibold">
                Our Working <br/>
                Mechanism
            </h4>
            <p className="our-mechanism-content">
            The history of this Wyoming plumbing service goes as far back as 1933. These were the times when Samuel Buick creautomatic machine 
            </p>
        </div>
        <div className="flex flex-col lg:flex-row w-full lg:w-2/3 ml-auto">
            <HoverCardComponent bgNone imgSrc={Images.multimeter_white}/>
            <HoverCardComponent bgNone imgSrc={Images.multimeter_white}/>
            <HoverCardComponent bgNone imgSrc={Images.multimeter_white}/>
        </div>
    </div>
)