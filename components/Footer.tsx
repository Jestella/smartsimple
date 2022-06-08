import footerStyles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
    <>
      <footer>
        <div className={footerStyles.footer}>
          <p className='text-white text-center pt-5'>
            © Copyright 2022 Stella Lee. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
