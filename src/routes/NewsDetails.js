import React from 'react';
import { connect } from 'dva';


const NewsDetails = (NewsDetail) => {
  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: NewsDetail.NewsDetail.data ? NewsDetail.NewsDetail.data.body : "加载中"}} />
    </div>
  );
};

NewsDetails.propTypes = {
};

function mapStateToProps(state) {
  return {
    NewsDetail: state.newslatest.NewsDatail
  }
}

export default connect(mapStateToProps)(NewsDetails);
