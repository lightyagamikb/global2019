import { SubHeader, Images } from './../components'

const data = ['All', 'Fresh Wiring', 'Installation', 'Products', 'Repair', 'Ventures']

const imgData = Array(10).fill(null);

export default () => (
    <>
        <SubHeader 
            subHeader="Recent Works"
            invertColors         
        />
        <div className="flex flex-wrap content-center items-center text-center">
            {
                data.map((c, index) => <div className="text-2xl text-white mx-2 hover:text-secondary" key={index}>{c}</div>)
            }
        </div>
        <div className="flex flex-wrap -mx-4">
            {
                imgData.map((item, index) => <div className="bg-white m-4 h-48 w-48" key={index}></div>)
            }
        </div>
        <div className='flex w-full my-3'>
            <div className="bg-primary w-8 h-8 relative ml-auto mr-4 cursor-pointer">
                <img 
                    src={Images.arrowRight}
                    className="absolute inset-0 object-contain object-center"
                    style={{transform: 'scale(0.6)', marginTop: -4, marginLeft: 4}}
                    />
            </div>
            <div className="bg-primary w-8 h-8 relative mr-4 cursor-pointer">
                <img 
                    src={Images.arrowRight}
                    className="absolute inset-0 object-contain object-center"
                    style={{transform: 'scale(0.6) rotate(180deg)', marginTop: -4, marginLeft: 6}}
                    />
            </div>
        </div>

    </>
)