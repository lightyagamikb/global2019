import Images from './images';

export default props => {
    return (
        <>
        <div className="flex p-4 justify-center hover-card border flex-col text-center">
            <img
                className="img-hover-hide"
                src={Images.multimeter_blue}
            />
            <img 
                className='img-hover-show'               
                src={Images.multimeter_white}
            />
            <h2>header</h2>
            <p>lorem ipsun dummy test fjklsfjadfiasdfiasjfklfjjfdklfjdasfidsfj klsfjoisfj;l djfias d;fdsmjfdaif; </p>
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

