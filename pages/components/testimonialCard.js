
export default ({imgSrc, imgStyle, name, comment, imgSrc_2}) => (
    <div className='w-full border-r-3 bg-primary flex p-3'>
        <div className="flex flex-col ">
            <img src={imgSrc} style={imgStyle} className="w-15 h-15 border border-gray-700" />
            <img src={imgSrc_2} style={imgStyle} className="w-10 h-10 border border-gray-700 mt-auto mb-4" />
        </div>
        <div className="flex flex-col ml-4">
            <h4 className="font-semibold text-white text-xl mb-1">{name}</h4>
            <p className="text-sm text-white font-light">{comment}</p>
        </div>
    </div>
)