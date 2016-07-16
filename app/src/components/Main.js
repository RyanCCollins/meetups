import React from 'react';
import { Navbar } from 'components';

const Main = (props) => (
  <div>
    <Navbar isSignedIn={false} />
    {React.cloneElement(props.children, props)}
  </div>
);

export default Main;
