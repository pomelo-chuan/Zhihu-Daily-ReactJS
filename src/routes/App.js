import React from 'react';
import { connect } from 'dva';

function App({count, dispatch}) {
    function add() {
        dispatch({ type: 'count/add' });
    }
    function minus() {
        dispatch({ type: 'count/minus' });
    }
    return (
        <div>
            <h3>{count}</h3>
            <button onClick={add} style={{ "padding": "10px" }}>+</button>
            <button onClick={minus} style={{ "padding": "10px" }}>-</button>
        </div>
    );
};

App.propTypes = {
};

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(App);
