export default ({imgSrc, header, content, goTo, imgAlt}) => {
    return (
        <div className="w-full mx-2 lg:mx-4 lg:max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={imgSrc} alt={imgAlt || 'blog-img'} />
            <div className="px-6 py-4 font-segoeUI">
            <div className="font-bold text-xl mb-2">{header}</div>
                <p className="text-gray-700 text-base">                    
                {content || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.'}
                </p>
            </div>
            <div className="px-6 py-4">
               <a className="cursor-pointer text-primary text-lg">Read More</a>
            </div>
        </div>
    )
}