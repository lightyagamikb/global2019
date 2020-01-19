
export default ({imgSrc, imgStyle}) => (
    <div className='w-full lg:w-1/4 border-r-3 bg-primary flex p-3'>
        <div className="flex flex-col ">
            <img src={imgSrc} style={imgStyle} />
        </div>
        <div></div>
    </div>
)