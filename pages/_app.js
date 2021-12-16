import styled from "styled-components";
import Head from "next/head";

const PageWrapper = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 80px;
`;

function MyApp({ Component, pageProps }) {
  return (
    <PageWrapper>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </PageWrapper>
  );
}

export default MyApp;
