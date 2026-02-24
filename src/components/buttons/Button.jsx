import React from 'react';

const Button = ({children,btnStyle}) => {
    return (
        <div>
            <button className={`${btnStyle} cursor-pointer rounded-xl px-5 py-3 min-w-fit font-forBodyText text-md md:text-xl `}>{children}</button>
        </div>
    );
};

export default Button;