import React, { useState } from 'react'
import Back from '../../common/Back'
import OnlineCourses from './OnlineCourses'
import CoursesCard from './CoursesCard'
import './allcourses.css'

export const Allcourses = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase())
  }

  return (
    <>
      <Back title="All Courses" />

      {/* Search Bar */}
     

      <OnlineCourses searchQuery={searchQuery} />
      <div className="search-bar">
        <div className="container">
          <input
            type="text"
            placeholder="Search for a course..."
            onChange={handleSearch}
            value={searchQuery}
          />
        </div>
      </div>
      <CoursesCard searchQuery={searchQuery} />
    </>
  )
}
