import React from 'react';
import style from '../../styles/title.css'

const Title = (props) => {
  return (
    <div className={`${style.title} m1 h6 pl1 bold`} style={{borderLeft: "4px solid grey", color: "grey"}}>
      {props.title}
    </div>
  );
};

Title.propTypes = {
};

export default Title;
