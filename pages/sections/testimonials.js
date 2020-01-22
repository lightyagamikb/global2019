import { SubHeader, TestimonialCard, Images } from './../components';

const data = [
    {
        name: 'Rahul',
        comment: 'Fed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia.',
        imgUrl: Images.testimonialImg,
        imgUrl_2: Images.leftQuoteMark
    },
    {
        name: 'Rahul',
        comment: 'Fed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia.',
        imgUrl: Images.testimonialImg,
        imgUrl_2: Images.leftQuoteMark
    },
]


export default ({}) => {
    return (
        <>
            <SubHeader 
                subHeader="What our customers say"
                content={`
                The history of this Wyoming plumbing service goes as far back as 1933. These were the times when Samuel Buick created and patented a first ever automatic machine for cleaning pipes and drains. He called it "PlumberPro" and founded a plumbing service with the initial capital which he earned thanks to his invention! Since then, the plumbing service he founded on par with that invention has stayed in that same family's ownership
                `}
            />
            <div className="container lg:container-lg flex flex-col lg:flex-row items-center align-center justify-center mt-5">
                {
                    data.map((item, index) => {
                        return (
                            <div className='flex w-100 px-5 lg:w-1/3 mb-3 lg:mb-0' key={index}>
                                <TestimonialCard  
                                    imgSrc={item.imgUrl}
                                    name={item.name}
                                    comment={item.comment}
                                    imgSrc_2={item.imgUrl_2}
                                />
                            </div>
                        )
                    })
                }
            </div>

        </>
    )
}