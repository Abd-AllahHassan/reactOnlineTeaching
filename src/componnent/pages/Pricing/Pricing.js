import React from 'react'
import PriceCard from './PriceCard'
import Back from '../../common/Back'

export const Pricing = () => {
  return (
    <>
    <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}
