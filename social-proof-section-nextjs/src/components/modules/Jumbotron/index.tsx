import React from 'react'
import EachUtils from '@/utils/EachUtils';
import { LIST_REVIEW } from '@/constants/listReview';
import { generateRatingStar } from '@/utils/generateRatingStar';

const Jumbotron = () => {
    return (
        <section className="mt-20 flex flex-col items-center justify-between sm:flex-row">
            {/* Title Section */}
            <div className="w-full sm:w-1/2 space-y-6">
            <h1 className="text-5xl font-bold text-center w-full text-primaryMagenta sm:w-3/5 sm:text-left">
                10,000+ of our users love our products.
            </h1>
            <p className="text-lg text-darkMagenta w-full text-center sm:w-4/5 sm:text-left">
                We only provide great products combined with excellent customer
                service. See what our satisfied customers are saying about our
                services.
            </p>
            </div>
            {/* End of Title Section */}

            {/* Rating Card Section */}
            <div className="w-full space-y-3 mt-8 sm:w-1/2 sm:space-y-6">
                <EachUtils
                    of={LIST_REVIEW}
                    render={(item, index) => (
                    <div
                        key={index}
                        className={`bg-lightMagenta rounded-md px-6 py-4 w-full flex flex-col items-center gap-4 sm:flex-row sm:max-w-md sm:gap-8 static sm:relative`}
                        style={{ left: `${index * 4}rem !important` }}
                    >
                        <div className="flex gap-1">
                            {generateRatingStar(item.rating)}
                        </div>

                        <p className="text-lg text-primaryMagenta font-bold">
                        {item.description}
                        </p>
                    </div>
                    )}
                />
            </div>
            {/* End of Rating Card Section */}
        </section>
    );
}

export default Jumbotron