import React from "react"
import { testimonal } from "../../../../dummydata"
import Heading from "../../../common/Heading"
import "./style.css"

const Testimonal = () => {
  return (
    <>
      <section className='testimonal padding'>
          <Heading subtitle='TESTIMONIAL' title='Our Successful Students' />
        <div className='container'>

          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonal
