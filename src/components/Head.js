import React from 'react';
import classnames from 'classnames';
import head from '../styles/head.css';

const Head = (props) => {
  return (
    <div className={`${head.ZhihuHead} center caps`}>
      <h1 className={`h3`}>zhihu daily</h1> 
      <p className={`h6`}>based on reactjs</p>
    </div>
  );
};

Head.propTypes = {
};

export default Head;
