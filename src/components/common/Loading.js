import React, { PropTypes } from 'react';
import style from '../../styles/Loading.css'

function Loading({ loading }) {
  return (
    <div className={style.spinner} hidden={!loading}> </div>
  );
}

Loading.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Loading;
