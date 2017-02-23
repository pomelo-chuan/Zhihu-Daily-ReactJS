import React from 'react';
import { connect } from 'dva';
import style from '../../styles/listItem.css'

const ListItem = (props) => {
    return (
        <div className={`${style.listItem} m1 h6 p1`}>
            {props.listName}
        </div>
    );
};

ListItem.propTypes = {
};


function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(ListItem);