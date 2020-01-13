import Images from './images';

export default props => {
    return (
        <>
        <div className="flex p-4 justify-center hover-card">
            <img
                className="img-hover-hide"
                src={Images.multimeter_blue}
            />
            <img 
                className='img-hover-show'               
                src={Images.multimeter_white}
            />
        </div>
        <style jsx>
            {`
                .hover-card:hover {
                    
                    border: 1px solid;
                }
            `}
        </style>
        </>
    )
}

