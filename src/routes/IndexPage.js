import React from 'react';
import { connect } from 'dva';
import { Router, Route, Link, browserHistory } from 'react-router';
require('basscss/css/basscss.min.css');
import styles from '../styles/IndexPage.css';
import Head from '../components/Head';
import ListItem from '../components/List/ListItem';
import Title from '../components/common/Title';
import Loading from '../components/common/Loading';

function IndexPage({News, dispatch, loading}) {
  function getNextPage() {
    dispatch({ type: "newslatest/FetchNewsMore" })
  };

  // 把知乎返回的字符串格式的时间格式化成’2017年05月10日‘这样的格式
  String.prototype.fomateDate = function (value) {
    var middleState = value.split("");
    middleState.splice(4, 0, "年");
    middleState.splice(7, 0, "月")
    middleState.splice(middleState.length, 0, "日")
    var middleState2 = middleState.toString().replace(/,/g, '')
    return middleState2
  }

  return (
    <div>
      <Loading loading={loading} />
      <Head></Head>
      <Title title={"今日热点"}></Title>
      {
        News.NewsLatest.data ? News.NewsLatest.data.top_stories.map((item) => (
          <Link key={item.id} to={`/detail/${item.id}`} className={styles.list}>
            <ListItem listName={item.title}></ListItem>
          </Link>

        )) : ''
      }

      {
        News.NewsRoot ? News.NewsRoot.map((item, i) => (
          <div key={i}>
            <Title title={item.data.date.fomateDate(item.data.date)}></Title>
            {
              item.data.stories.map((item) => (
                <Link key={item.id} to={`/detail/${item.id}`} className={styles.list}>
                  <ListItem listName={item.title}></ListItem>
                </Link>
              ))
            }
          </div>
        )) : ''
      }
      <button onClick={getNextPage} className={`${styles.nextPage} pl2 pr2 pt1 pb1 mb2 mt1`}>MORE</button>
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps(state) {
  return {
    News: state.newslatest,
    loading: state.loading.global,
  }
}

export default connect(mapStateToProps)(IndexPage);
