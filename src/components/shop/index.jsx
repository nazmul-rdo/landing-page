import React from 'react'
import { CoffeeCard } from './CoffeeCard'

import { Element } from 'react-scroll';


const Shop = () => {
  return (
    <section  id="shop" >
    <div className="bg-light-100 mt-8 py-24 sm:py-32 ">
        <div className="flex items-center flex-col ">
          <h1 className="text-dark-grey font-bold text-lg  py-3 md:text-6xl">
            Our Shop
          </h1>
          <p className="text-light-grey text-sm mb-4">
            What would you like to sip today?
          </p>
        </div>
        <CoffeeCard />
      </div>
      </section>
  )
}

export default Shop