import React, { PropTypes } from 'react';
import style from '../../styles/Loading.css'

function Loading({ loading }) {
  return (
    <div>
      <div className={style.spinner} hidden={!loading}> </div>
    </div>

  );
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loading;
