import React from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import Button from '../../../components/buttons/Button';

const ProgressBar = () => {
    let collectedAmount = 50000 ;
    let totalAmount = 60000;
    let collectionsPercentage = totalAmount > 0 ? Math.min((collectedAmount / totalAmount) * 100, 100) : 0 ;
    let percentage = Number(collectionsPercentage.toFixed(1));
    console.log(collectionsPercentage);


    return (
        <div>
            <div className='md:max-w-6xl px-6 my-4 bg-[#FFFFFF] shadow-md rounded-xl hover:shadow-lg md:px-2 mx-auto'>
                <div className=' space-y-2'>
                    <h4 className='text-activeNavlinkColor font-forBodyText font-semibold'>CURRENT AIM</h4>
                    <h1 className='font-forHeading text-lg font-semibold'>Building Water Tube Well</h1>
                </div>
                <div className='flex justify-between  space-y-1'>
                    <p className='font-semibold'>collection-update in percentage : {percentage}%</p>
                    <p className='flex '><span className='flex items-center text-green-600 font-semibold'><FaBangladeshiTakaSign/>{collectedAmount}</span>/  <span className='flex items-center text-red-600 font-semibold'><FaBangladeshiTakaSign/>{totalAmount}</span></p>
                </div>

                <div className='relative'>
                    <div className='h-3 w-full rounded-full  bg-activeNavlinkColor/20 '></div>
                    <div className='absolute top-0 h-3 rounded-full   bg-activeNavlinkColor' style={{width: `${percentage}%`}}></div>
                </div>
                
                <Button btnStyle='bg-activeNavlinkColor/10 border border-activeNavlinkColor  my-3 hover:bg-[#D4AF37] hover:text-white transition-all duration-300'>Support This Aim</Button>

            </div>
        </div>
    );
};

export default ProgressBar;