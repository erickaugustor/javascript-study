import React from 'react'
import { childrenWithProps } from '../utils/reactUtils'

export default props => (
  <div>
    <h1>Apenas um test.</h1>
    { childrenWithProps(props.children, props) }
  </div>
)

/*
export default props => (
  <div>
    <h1>Apenas um test.</h1>
    { React.Children.map(props.children, child => React.cloneElement(child, {...props})) }
  </div>
)
*/

/*
  map, ele pegará o array de alguma coisa, e irá fazer uma mudança nesses valores
*/

/*
  {}, aqui dentro você poderá colocar coisas para o React/Será interpretado como uma expressão!
*/