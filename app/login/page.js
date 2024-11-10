import React from 'react';
import MainComponent from './MainComponent';


const Page = () => {

    const BASE_URL = process.env.BASE_URL;
    
    

    return (
        <div>
            <MainComponent baseUrl={BASE_URL} />
        </div>
    );
}

export default Page;
