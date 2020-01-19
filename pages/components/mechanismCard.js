export default ({title, imgSrc, imgSrcHover}) => (
    <div className="bg-white hover:bg-primary text-black hover:text-white flex-column p-3 w-full h-full flex-1 rounded">
        <h5
            className=""
        >{title}</h5>
        <img 
            src={imgSrc}
            className="ml-auto hover:hidden w-16 h-auto"
        />
        <img 
            src={imgSrcHover}
            className="ml-auto hidden hover:block w-16 h-auto"
        />
    </div>
)