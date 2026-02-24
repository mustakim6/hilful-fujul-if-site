import React from 'react';

const PaymentGatewayBtn = ({pamentGatewayName,color,icon}) => {
    return (
        <>
            <button style={{color:`#${color}`}} className= 'w-full px-10 py-4 border-2 rounded-lg border-gray-400/30   hover:cursor-pointer hover:border-activeNavlinkColor transition-all duration-300 font-bold flex items-center justify-center gap-1'>
            <img src={icon} alt="icon"  className='w-6 h-6'/>
            {pamentGatewayName}
            </button>
        </>
    );
};

export default PaymentGatewayBtn;