import {Entity} from 'aframe-react';
import React from 'react';

export default props => (
  <Entity>
    <Entity camera="" position="0 0 -2" rotation="0 0 0" look-controls="" wasd-controls="" {...props}/>

  </Entity>
);
