import Header from './Header';
import Footer from './Footer';
import Home from '../pages/index';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>
        <Home />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
