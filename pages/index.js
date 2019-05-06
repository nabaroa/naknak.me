import Head from 'next/head';
import "../style.css"



function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <p>Hello world!</p>

    </div>
  );
}

export default IndexPage;