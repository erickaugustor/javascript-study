import React from 'react'

export default props => (
  <div>
    <h1>Apenas um test.</h1>
    { React.cloneElement(props.children, {...props}) }
  </div>
)


/* export default props => (
  <div>
    <h1>Apenas um test.</h1>
    {props.children}
    { React.cloneElement(props.children, {...props}) }
  </div>
) */