import React from 'react';

const Heading = ({children}) => {
    return (
        <h1 className='underline text-3xl text-center'>{children}</h1>
    );
};

export default Heading;