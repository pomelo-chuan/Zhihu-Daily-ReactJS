import React from 'react';
import classnames from 'classnames';
import head from '../styles/head.css';

const Head = (props) => {
  return (
    <div className={`${head.ZhihuHead} center caps`}>
      <p className={`h2`}>Zhihu Daily</p>
      <p className={`h6`}>bassed on ReactJs</p>
    </div>
  );
};

Head.propTypes = {
};

export default Head;
