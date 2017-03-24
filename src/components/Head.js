import React from 'react';
import head from '../styles/head.css';
import {Link} from 'react-router';

const Head = () => {
  return (
    <div className={`${head.headContainer}`}>
      <div className={`${head.ZhihuHead} center caps`}>
        <h1 className={`h3`}>zhihu daily</h1>
        <p className={`h6`}>based on reactjs</p>
      </div>
      <div className="clearfix center">
        <div className={`col col-6`}>
          <Link to="/detail" activeClassName={`${head.linkActive}`} className={`${head.link}`}>HOME</Link>
        </div>
        <div className={`col col-6`}>
          <Link to="/list" activeClassName={`${head.linkActive}`}  className={`${head.link}`}>LIST</Link>
        </div>
      </div>
    </div>
  );
};

Head.propTypes = {};

export default Head;
