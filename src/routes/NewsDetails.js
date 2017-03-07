import React from 'react';
import { connect } from 'dva';
import Loading from '../components/common/Loading'

function NewsDetails({props}) {
  return (
    <div>
      <Loading loading={props.loading} />
      <div dangerouslySetInnerHTML={{ __html: props.NewsDetail.data ? props.NewsDetail.data.body : "" }} />
    </div>
  );
}

NewsDetails.propTypes = {
};

function mapStateToProps(state) {
  return {
    props: {
      NewsDetail: state.newslatest.NewsDatail,
      loading: state.loading.global,
    }
  }
}

export default connect(mapStateToProps)(NewsDetails);
