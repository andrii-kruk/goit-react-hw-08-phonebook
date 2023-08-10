import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import AppBar from 'components/AppBar/AppBar';
import Footer from 'components/Footer/Footer';
import { StyledContainer } from 'components/Container/Container.styled';

const Layout = () => {
  return (
    <>
      <AppBar />
      <StyledContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </StyledContainer>
      <Footer />
    </>
  );
};

export default Layout;
