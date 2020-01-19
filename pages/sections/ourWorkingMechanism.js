import { Images, Mechanism } from './../components';

const data = [
    {
        img: Images.rupeeBlack,
        imgHover: Images.rupeeWhite,
        title: 'Affordable Price'
    },
    {
        img: Images.shieldBlack,
        imgHover: Images.shieldWhite,
        title: 'Quality at Work'
    },
    {
        img: Images.avatarBlack,
        imgHover: Images.avatarBlack,
        title: 'Experienced Staff'
    },
    {
        img: Images.sosBlack,
        imgHover: Images.sosWhite,
        title: 'Emergency Service'
    },
    {
        img: Images.sosBlack,
        imgHover: Images.sosWhite,
        title: 'Quick Service'
    },
    {
        img: null,
        imgHover:null,
         title: 'Book Now'
    }

]

export default ({}) => {
    <div className="flex flex-row bg-gray-900 p-5 content-center justify-center"> 
        <div className="flex flex-col text-white w-1/3">
            <h5 className="text-3xl">
                Our Working Mechanism
            </h5>
            <p className="text-gray-400">
            The history of this Wyoming plumbing service goes as far back as 1933. These were the times when Samuel Buick creautomatic machine for cleaning pipes and drains. He called it "PlumberPro" and founde
            </p>
        </div>
        <div className="w-3/4">
            {
                data.map((item, index) => {
                    return (
                        <Mechanism 
                            key={index}
                            
                        />
                    )
                })
            }
        </div>
    </div>
}