import React from 'react';

const Title = (props) => {
  return (
    <div className={`m1 h6 pl1 bold`} style={{borderLeft: "4px solid grey", color: "grey"}}>
      {props.title}
    </div>
  );
};

Title.propTypes = {
};

export default Title;
