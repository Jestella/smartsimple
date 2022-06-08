import Navbar from './Navbar';

import headerStyles from '../styles/header.module.scss';

const Header = () => {
  return (
    <div className={headerStyles.header}>
      <Navbar />
      <div className={headerStyles.search}>
        <div>
          <form className='d-flex' role='search'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-light' type='submit'>
              Search
            </button>
          </form>
        </div>
        <div>
          <p className='text-white'>
            Toll Free: 866.239.0991{' '}
            <button type='button' className='btn btn-success'>
              Request Demo
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
