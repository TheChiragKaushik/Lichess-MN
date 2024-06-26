// components/Layout.js
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Layout = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Layout;
