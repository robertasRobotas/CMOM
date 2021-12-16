import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  height: 100px;
  padding-top: 80px;
`;

function MyApp({ Component, pageProps }) {
  return (
    <PageWrapper>
      <Component {...pageProps} />
    </PageWrapper>
  );
}

export default MyApp;
