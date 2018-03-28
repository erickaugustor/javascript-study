import React from 'react';
import ReactDOM from 'react-dom';

// import SilvaFamily from './silvaFamily';
import Family from './family'
import Member from './member'

/* ReactDOM.render(
  <SilvaFamily />,
  document.getElementById('app'),
); */

ReactDOM.render(
  <Family lastName='Silva'>
    <Member name='Guilherme'/>
  </Family>,
  document.getElementById('app')
)

//  Children ===  <Member name='Guilherme' lastName='Silva' />
