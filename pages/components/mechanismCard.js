export default ({title, imgSrc, imgSrcHover}) => (
    <div className="bg-white hover:bg-primary text-black hover:text-white flex-col p-3 w-full h-full flex-1 rounded-lg flex">
        <h5
            className=""
        >{title}</h5>
        <img 
            src={imgSrc}
            className="ml-auto hover:hidden w-20 h-20 mt-auto"
        />
        <img 
            src={imgSrcHover}
            className="ml-auto hidden hover:block w-20 h-20 mt-auto"
        />
    </div>
)