import Images from './images';

export default ({imgSrc, ImgScrHover, header, info, bgNone}) => {
    return (
        <>
        <div className={`flex justify-center hover-card flex-col text-center mx-3 pt-2 ${bgNone ? 'bg-transparent text-white': ''}`}>
            <img
                className="img-hover-hide"
                src={imgSrc || Images.multimeter_blue}
            />
            <img 
                className='img-hover-show'               
                src={ImgScrHover || Images.multimeter_white}
            />
            <h2 className="my-2">{header || 'header'}</h2>
            <p>
               {
                   info || 'Mastering the supply with the requirements'
               }
            </p>
        </div>
        <style jsx>
            {`
                .hover-card:hover {                    
    
                }
            `}
        </style>
        </>
    )
}

