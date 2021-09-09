import React from 'react'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const ex1 = 10
  const part2 = 'Using props to pass data'
  const ex2 = 7
  const part3 = 'State of a component'
  const ex3 = 14

  const Header = (props) => {
    return (
      <h1>
        {props.course}
      </h1>
    )
  }

  const Part = (props) => {
    return (
      <p>
        {props.part} {props.ex}
      </p>
    )
  }

  const Content = () => {
    return (
    <>
      <Part part={part1} ex={ex1} />
      <Part part={part2} ex={ex2} />
      <Part part={part3} ex={ex3} />
    </>
    )
  }

  const Total = () => {
    return (
    <p>
        Number of exercises {ex1 + ex2 + ex3}
    </p>
    )
  }

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total />
    </div>
  );
}

export default App;
