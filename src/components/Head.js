import React from 'react';
import classnames from 'classnames';
import head from '../styles/head.css';

const Head = () => {
  const ZhihuheadStyle = classnames({ZhihuHead: true}, 'center')
  return (
    <div className={ZhihuheadStyle}>
      <p className="m1">知乎日报</p>
      <p></p>
    </div>
  );
};

Head.propTypes = {
};

export default Head;
