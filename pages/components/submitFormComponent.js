import React, {useState} from 'react';
import {Input} from './';

const changeInput = initialValue => {
    const [value, changeValue] = useState(initialValue);

    return {
       value, 
       changeValue,
       reset: () => changeValue(''),
       bind: {
           value,
           onChange: e => changeValue(e.target.value)
       }     
    }
}


export default () => {
       
    const [name, changeName] = useState('');
    const { reset: phoneReset, bind: phoneBind } = changeInput('');
    const { reset: emailReset, bind: emailBind } = changeInput('');
    const { reset: locationReset, bind: locationBind } = changeInput('');

    const onsubmit = () => {       
        // nameReset();
        // phoneReset();
        // emailReset();
        // locationReset();
    }
    
        return(
                    <div className="w-full max-w-xs bg-primary text-white py-3 text-center rounded-lg pb-0">
                        <div className="text-white text-lg font-semibold">Book Now</div>
        <form className="px-8 pt-6">
            <div className="mb-4">           
                <Input 
                    placeholder="Name"
                    // value={name}
                    // onChange={changeName}
                />
            </div>
            <div className="mb-4">           
                <Input 
                    placeholder="Contact Number +91"
                    // {...phoneBind}
                />
            </div>
            <div className="mb-4">           
                <Input 
                    placeholder="Email Id"
                    // {...emailBind}
                />
            </div>
            <div className="mb-4">           
                <Input 
                    placeholder="Location"
                    // {...locationBind}
                />
            </div>   

            <div className="flex items-center justify-between -mx-8 mt-4">
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-none focus:outline-none focus:shadow-outline w-full rounded-b-lg" type="button"
                onClick={() => onsubmit()}
            >
                SUBMIT
            </button>
            </div>
        </form>       
        </div>
        )
    



}