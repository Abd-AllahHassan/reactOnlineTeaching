import React from 'react'
import { coursesCard } from '../../../dummydata'

const CoursesCard = ({ searchQuery }) => {
  const filteredCourses = coursesCard.filter((val) =>
    val.coursesName.toLowerCase().includes(searchQuery)
  )

  return (
    <section className="coursesCard">
      <div className="container grid2">
        {filteredCourses.map((val) => (
          <div className="items" key={val.coursesName}>
            <div className="content flex">
              <div className="left">
                <div className="img">
                  <img src={val.cover} alt={val.coursesName} />
                </div>
              </div>
              <div className="text">
                <h1>{val.coursesName}</h1>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <label htmlFor="">(5.0)</label>
                </div>
                <div className="details">
                  {val.courTeacher.map((details) => (
                    <div className="box" key={details.name}>
                      <div className="dimg">
                        <img src={details.dcover} alt={details.name} />
                      </div>
                      <div className="para">
                        <h4>{details.name}</h4>
                      </div>
                      <span>{details.totalTime}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="price">
              <h3>
                {val.priceAll} / {val.pricePer}
              </h3>
            </div>
            <button className="outline-btn">ENROLL NOW!</button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CoursesCard
