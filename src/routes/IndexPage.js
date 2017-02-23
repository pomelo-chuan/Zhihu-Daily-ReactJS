import React from 'react';
import { connect } from 'dva';
import styles from '../styles/IndexPage.css';
import Head from '../components/Head';
require('basscss/css/basscss.min.css');

function IndexPage({News, dispatch}) {
  return (
    <div>
      <Head></Head>
      <div>{News.NewsLatest.data ? News.NewsLatest.data.date : ''}</div>
      {
        News.NewsLatest.data ? News.NewsLatest.data.stories.map( (item) => <div key={item.id}>{item.id}</div>) : ''
      }
    </div>
  );
}

IndexPage.propTypes = {
};


function mapStateToProps(state) {
  return {
    News: state.newslatest
  }
}

export default connect(mapStateToProps)(IndexPage);
