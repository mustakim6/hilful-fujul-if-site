import React from 'react';


// eslint-disable-next-line no-unused-vars
const CardsForHome = ({Icon, cardTitle, cardSubTitle}) => {
    return (
        <div className='flex flex-col items-center gap-5 px-8 py-5 bg-[#FFFFFF] max-w-full  md:max-w-100 h-64 rounded-md shadow-xl m-2'>
            <div className='bg-[#d7f3e6] size-14 flex justify-center items-center rounded-full'>

               
               <Icon className='text-3xl text-activeNavlinkColor'/>
            </div>
            <div className='text-center leading-relaxed'>
                <h1 className='text-xl font-forHeading font-bold mb-5'>{cardTitle}</h1>
                <p className='text-md text-center font-forBodyText'>{cardSubTitle}</p>
            </div>
        </div>
    );
};

export default CardsForHome;