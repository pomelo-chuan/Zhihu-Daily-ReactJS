import React, { PropTypes } from 'react';
import style from '../../styles/Loading.css'

function Loading({ loading }) {
  return (
    <div hidden={!loading} className={style.loading}>
      <h1>LOADING</h1>
    </div>
  );
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loading;
