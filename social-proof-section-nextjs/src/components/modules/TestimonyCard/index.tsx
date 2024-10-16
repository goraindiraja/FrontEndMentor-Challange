import React from 'react'
import EachUtils from '@/utils/EachUtils'
import { LIST_TESTIMONY } from '@/constants/listTestimony'

const TestimonyCard = () => {
  return (
    <section className="grid grid-cols-1 gap-8 mt-12 sm:grid-cols-3">
      <EachUtils
        of={LIST_TESTIMONY}
        render={(item, index) => (
          <article
            key={index}
            className={`bg-primaryMagenta p-8 rounded-lg static sm:relative`}
            style={{ top: `${index * 2}rem !important` }}
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt="profile-img"
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h3 className="font-bold text-white">{item.name}</h3>
                <p className="text-primaryPink">Verified Buyer</p>
              </div>
            </div>
            <p className="mt-4 text-white text-justify">{item.description}</p>
          </article>
        )}
      />
    </section>
  );
}

export default TestimonyCard