import React from 'react';
 
const HomePage = () => {
    return (
        <div className='w-full min-h-screen pt-[25vh] bg-zinc-950 relative overflow-hidden'>
            {/* Background SVG Pattern */}
            <div className='absolute opacity-20'></div>
            
            <div className='relative z-10'>
                {/* Main Heading */}
                <div className='w-full flex flex-wrap justify-center md:justify-between px-[10vw] text-zinc-300 font-semibold md:text-6xl text-5xl tracking-tighter uppercase gap-4'>
                    <div>
                        <h1 className=' font-[Neue] font-bold pt-10'>Unlocking </h1>
                        <h1 className=' font-[Neue] font-bold'>the path</h1>
                    </div>
                    <div className='relative px-6  '>
                        <h1 className='absolute text-xl left-0 top-0 bg-[#1c46ff] font-bold text-white rounded-full px-3 py-2'>To</h1>
                        <h1 className='pt-10 font-[Neue]'>Financial </h1>
                        <h1 className='font-[Curvy]'>Success </h1>
                    </div>
                </div>

                {/* Info Cards */}
                <div className="flex flex-wrap justify-center gap-8 mt-16 px-4 md:px-[10vw]">
                    {/* Card 1 */}
                    <div className="w-full md:w-1/3 max-w-sm p-6 bg-transparent backdrop-blur-lg rounded-xl shadow-lg border border-zinc-600">
                        <h2 className="text-2xl font-semibold text-purple-200 mb-4">Software Development</h2>
                        <p className="text-purple-100">Explore the latest technologies and best practices in software development.</p>
                    </div>

                    {/* Card 2 */}
                    <div className="w-full md:w-1/3 max-w-sm p-6 bg-tra backdrop-blur-lg rounded-xl shadow-lg border border-zinc-600">
                        <h2 className="text-2xl font-semibold text-purple-200 mb-4">Data Science</h2>
                        <p className="text-purple-100">Learn about the tools and techniques used in data science and machine learning.</p>
                    </div>

                    {/* Card 3 */}
                    <div className="w-full md:w-1/3 max-w-sm p-6 bg-tra backdrop-blur-lg rounded-xl shadow-lg border border-zinc-600">
                        <h2 className="text-2xl font-semibold text-purple-200 mb-4">Product Management</h2>
                        <p className="text-purple-100">Understand the role of a product manager and the skills required for the job.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
