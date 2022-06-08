import Link from 'next/link';
import headerStyles from '../styles/header.module.scss';

const Navbar = () => {
  return (
    <div>
      <nav className='navbar navbar-expand-lg bg-dark'>
        <div className='container-fluid mt-2 mb-2'>
          <Link href='/' passHref>
            <a className='navbar-brand text-white logo' href='/'>
              <h1 className='logo'> smartsimple</h1>
            </a>
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarNavDropdown'
            aria-controls='navbarNavDropdown'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'>=</span>
          </button>
          <div className='collapse navbar-collapse' id='navbarNavDropdown'>
            <ul className='navbar-nav ms-auto '>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle active text-white'
                  href='/solutions'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Solutions
                </a>
                <ul
                  className='dropdown-menu bg-dark'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/solutions/smartsimple-cloud'
                    >
                      SmartSimple Cloud
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/solutions/grants-management'
                    >
                      Grants Management
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/solutions/research-grants-management'
                    >
                      Research Grants Management
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/solutions/corporate-social-responsibility'
                    >
                      Corporate Social Responsibility
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/solutions/scholarship-management'
                    >
                      Scholarship Management
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/solutions/government-funding'
                    >
                      Government Funding
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/solutions/government-funding'
                    >
                      SmartSimple Cloud for Salesforce ®
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle text-white'
                  href='/services'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Services
                </a>
                <ul
                  className='dropdown-menu bg-dark'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/services/implementation'
                    >
                      Implementation
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/services/support'
                    >
                      Support
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/services/enhanced-services'
                    >
                      Enhanced Services
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/services/smartsimple-cloud-solution-support'
                    >
                      SmartSimple Cloud Solution Support
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/services/marketplace'
                    >
                      Marketplace
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/services/smartconnect-api'
                    >
                      SmartConnect API
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/services/training'
                    >
                      Training
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-white' href='/pricing'>
                  Pricing
                </a>
              </li>
              <li className='nav-item'>
                <a className='nav-link text-white' href='/events'>
                  Events
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle text-white'
                  href='/resources'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Resources
                </a>
                <ul
                  className='dropdown-menu bg-dark'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/resources/client-success-stories'
                    >
                      Client Success Stories
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/resources/blog'
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/resources/videos'
                    >
                      Videos
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle text-white'
                  href='/partners'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Partners
                </a>
                <ul
                  className='dropdown-menu bg-dark'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='partners/partners'
                    >
                      Partners
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='partners/partner-program'
                    >
                      Partner Program
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle text-white'
                  href='/about'
                  id='navbarDropdownMenuLink'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  About
                </a>
                <ul
                  className='dropdown-menu bg-dark'
                  aria-labelledby='navbarDropdownMenuLink'
                >
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/about/request-demo'
                    >
                      Request Demo
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/about/our-company'
                    >
                      Our Company
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/about/our-people'
                    >
                      Our People
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/about/contact-us'
                    >
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/about/careers'
                    >
                      careers
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item text-white'
                      href='/about/trust-center'
                    >
                      Trust Center
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
