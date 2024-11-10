import React  from 'react'
import MainComponent from './MainComponent';



const Page = () => {
    
    return (
        <div >
           <MainComponent baseUrl={process.env.BASE_URL} />
        </div>
    )
}

export default Page;
