export default ({title, imgSrc}) => (
    <div className="bg-white hover:bg-primary text-black hover:text-white border-r-8 flex-column p-3">
        <h5
            className=""
        >{title}</h5>
        <img 
            src={imgSrc}
            className="ml-auto"
        />
    </div>
)