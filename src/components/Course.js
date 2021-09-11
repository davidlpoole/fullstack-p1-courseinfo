import React from 'react'
import Content from './Content'
import Header from './Header'
import Totals from './Totals'

const Course = ({ course }) => {
    const exercises = course.parts.map(part => part.exercises)

    return (
        <li>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Totals exercises={exercises} />
        </li>
    )
}

export default Course;