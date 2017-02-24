import React from 'react';
import { connect } from 'dva';
import { Router, Route, Link, browserHistory } from 'react-router'
import styles from '../styles/IndexPage.css';
import Head from '../components/Head';
import ListItem from '../components/List/ListItem'
require('basscss/css/basscss.min.css');

function IndexPage({News, dispatch}) {
  // console.log("首页数据：", News.NewsLatest.data);
  return (
    <div>
      <Head title={"zhihu"}></Head>
      {
        News.NewsLatest.data ? News.NewsLatest.data.top_stories.map( (item) => (
          <Link key={item.id} to={`/detail/${item.id}`} className={styles.list}>
            <ListItem listName={item.title}></ListItem>
          </Link>
          
          )) : ''
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
