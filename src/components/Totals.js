import React from 'react';

const Totals = ({ exercises }) => {
    const total = exercises.reduce((p, c) => p + c);
    return (
        <h3>
            total of {total} courses
        </h3>
    )
}

export default Totals;