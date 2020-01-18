import Images from './../components/images';

const temp = Array(6).fill(null);

function Poster(props) {
    return (
        <div className="poster relative w-100 md:w-1/2 lg:w-1/3 p-2">
            <img 
                src={Images.wallPoster}
                className="w-full h-auto insect-0 object-center object-fit"
            />
        </div>
    )
}


export default () => {
    return (  
        <div className="flex flx-row flex-wrap">
            {
                temp.map((_, i) => <Poster key={i} />)
            }
        </div>
    )
}



