import React from 'react';
import classnames from 'classnames';
import head from '../styles/head.css';

const Head = (props) => {
  return (
    <div className={`${head.ZhihuHead} center caps h2`}>
      <p>{props.title}</p>
      <p></p>
    </div>
  );
};

Head.propTypes = {
};

export default Head;
