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
  <Family>
      <Member name='Guilherme' lastName='Silva' />
  </Family>,
  document.getElementById('app')
)
