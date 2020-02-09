import { FooterContent, Images } from "../components";

const data = {
    title: 'About',
    content: [
        'About us', 'Book online', 'Our services', 'Customer Stories', 'Recent Works', 'Feedback Blog'
    ] 
}

const data2 = {
    title: 'Support',
    content: [
        'Charitable', 'support', 'Commercial Support', 'Annual Maintenance'
    ]
}

const data3 = {
    title: 'Tools',
    content: ['Load Calculator']
}

const data4 = {
    title: 'Careers',
    content: [
        'we are Hiring', 'Join as a Partner'
    ]
}

const data5 = {
    title: 'Contact',
    content: [
        'Contact us', 'Email : contact@doamin.com', 'Support : +91 7032278270'
    ]
}



export default () => (
    <div className="flex flex-col lg:flex-row p">
        <div className="footer-logo flex flex-col w-1/5">
             <img src={Images.quote} />
             <div className="text-normal text-gray-300">
                Global Services is an Electrical Company providing services for domestic and Commercial environments by connecting the best touch of power to best standards by making it simpler.
             </div>
        </div>
        <div className="w-4/5 flex flex-row flex-wrap">
           <div className="flex-1">
                <FooterContent {...data} />
           </div>
           <div className="flex-1 flex-col">
                <FooterContent {...data2} />
                <FooterContent {...data3} />
           </div>           
           <div className="flex-1">
                <FooterContent {...data4} />
           </div>
           <div className="flex-1">
                <FooterContent {...data5} />
           </div>
           
        </div>
    </div>
)