import Head from 'next/head';
import Login from '../components/Login';

function LoginPage() {
  return (
    <>
      <Head>
        <title>Login / Touittaire</title>
      </Head>
      <Login />
    </>
  );
}

export default LoginPage;
