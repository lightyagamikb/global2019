import {Images, SubmitForm} from './../components';


export default () => (
    <div className="w-full h-full flex justify-center items-center flex-col lg:flex-row">
        <div className="flex flex-col flex-1">
            <div className="text-3xl text-white" style={{marginLeft: '40%'}}>
                Electricity is the <br /> only source <br /> to power up <br /> the future
            </div>
            <div className="ml-auto">
                <img src={Images.quote} alt="img"  className="w-24 h-24" />
            </div>
        </div>
        <div className="flex-1">
            <SubmitForm />
        </div>

    </div>
)