import React from 'react';
import { Context } from '../Context';

const UseContextPage = () => {
  const { themeColor } = React.useContext(Context)
  return (
    <div>
      <h3 className={themeColor}>UseContextPage</h3>
    </div>
  );
}

export default UseContextPage;
