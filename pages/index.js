import Head from 'next/head';
import Home from '../components/Home';
import Login from '../components/Login';

function Index() {
  return (
    <>
      <Head>
        <title>Home / Touittaire</title>
      </Head>
      <Login />
    </>
  );
}

export default Index;
