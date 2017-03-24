import React from 'react';
import Head from '../components/Head';


function Home(props) {

  return (
    <div>
      <Head></Head>
      {props.children}
    </div>
  );
};

Home.propTypes = {
};


export default Home;
