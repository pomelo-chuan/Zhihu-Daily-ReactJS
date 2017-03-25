import React from 'react';
import Head from '../components/Head';
import style from '../styles/IndexPage.css'

function Home(props) {

  return (
    <div className={style.root}>
      <Head></Head>
      {props.children}
    </div>
  );
};

Home.propTypes = {
};


export default Home;
