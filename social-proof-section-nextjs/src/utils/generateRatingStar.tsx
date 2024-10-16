import React from 'react'

export const generateRatingStar = (count: number): JSX.Element[] => {
    return Array.from({ length: count }, (_, i) => (
        <img key={i} src={"/images/icon-star.svg"} className="" alt={`icon-star-${i}`} />
    ));
};