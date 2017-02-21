import React from 'react';
import { connect } from 'dva';
import styles from '../styles/IndexPage.css';
import Head from '../components/Head'

function IndexPage() {
  return (
    <div>
      <Head></Head>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
