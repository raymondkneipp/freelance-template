import type { NextPage } from 'next';
import { Banner, Button, Footer, NavBar, Typography } from '../../';

const Layout: NextPage = ({ children }) => {
  return (
    <>
      <Banner>
        <Typography variant="p" color="light">
          Big News! We&apos;re offering 30% off all services.
        </Typography>
        <Button secondary to="/services" sm>
          Learn More
        </Button>
      </Banner>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
