import React, { Children, ReactNode } from "react";

// Define the types for the props
interface EachUtilsProps<T> {
    of: T[]; // Array of items of generic type T
    render: (item: T, index: number) => ReactNode; // Function that takes an item and index and returns a ReactNode
}

const EachUtils = <T,>({ of, render }: EachUtilsProps<T>): JSX.Element => {
    return (
        <>
            {
                Children.toArray(of.map((item, index) => render(item, index)))
            }
        </>
    )
};

export default EachUtils;
