import React from 'react';
import {Input} from './';


export default class SubmitForm extends React.Component {
    stata = {

    }


    render() {
        return(
                    <div className="w-full max-w-xs bg-primary text-white py-3 text-center rounded-lg pb-0">
                        <div className="text-white text-lg font-semibold">Book Now</div>
        <form className="px-8 pt-6">
            <div className="mb-4">           
                <Input 
                    placeholder="Name"
                />
            </div>
            <div className="mb-4">           
                <Input 
                    placeholder="Contact Number +91"
                />
            </div>
            <div className="mb-4">           
                <Input 
                    placeholder="Email Id"
                />
            </div>
            <div className="mb-4">           
                <Input 
                    placeholder="Location"
                />
            </div>            
            <div className="flex items-center justify-between -mx-8 mt-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-none focus:outline-none focus:shadow-outline w-full rounded-b-lg" type="button">
                SUBMIT
            </button>
            </div>
        </form>       
        </div>
        )
    }



}