import { Images } from './../components';
import React, { useState } from 'react';

export default ({onChange, submit}) => {

    const [mail, changeMail] = useState('dadsd');

  return (
        <div className="flex justify-center items-center refer-n-earn h-full">
            <div className="w-1/2 hidden lg:flex relative justify-center items-center">
                <img src={Images.phone} 
                    className="object-center object-contain"
                />
            </div>
            <div className="w-full lg:w-1/2 flex justify-center items-center flex-col text-left">
                <h5>Refer And Eard</h5>
                <p>
                    Refer any of our Electrical services and earn Rs.250 <br/>
                    Discount for you and your friend
                </p>
                <div className="relative sm:w-3/5 input-wrapper">
                    <input type="text"
                        value={mail}
                        onChange={e => changeMail(e.target.value)}
                        placeholder="Your Mail Id"
                    />
                    <span className="submit-mail">
                        <a>go</a>
                    </span>
                </div>
            </div>
        </div>
    )
}