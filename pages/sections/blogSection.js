import { SubHeader, BlogCard, Images } from './../components';

const data = Array(3).fill(null).map((d, i) => (
    {
        imgSrc: Images[`blog${i+1}`],
        header: 'What Our Customer',
        content: `The history of this Wyoming plumbing service goes as far back as 1933. These were the times when Samuel Buick created and patented a first ever automatic machine for cleaning pipes`,
        goTo: '',
        imgAlt: 'blog-img'
    }
))

export default ({}) => (
    <>
        <SubHeader 
            subHeader="Blog"
        />
        <div className="flex flex-col lg:flex-row justify-center items-cener">
            {
                data.map(i => 
                    <BlogCard 
                        imgSrc ={i.imgSrc}
                        header={i.header}
                        content={i.content}
                        goTo={i.goTo}
                        imgAlt={i.imgAlt}
                    />
                    )
                }
        </div>
    </>
)
