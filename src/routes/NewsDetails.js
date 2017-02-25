import React from 'react';
import { connect } from 'dva';
import Loading from '../components/common/Loading'

function NewsDetails({NewsDetail, loading}) {
  return (
    <div>
      <Loading loading={loading} />
      <div dangerouslySetInnerHTML={{ __html: NewsDetail.data ? NewsDetail.data.body : "" }} />
    </div>
  );
}

NewsDetails.propTypes = {
};

function mapStateToProps(state) {
  return {
    NewsDetail: state.newslatest.NewsDatail,
    loading: state.loading.global,
  }
}

export default connect(mapStateToProps)(NewsDetails);
