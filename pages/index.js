import Image from 'next/image';
import Cards from '../components/Cards';

import homeStyles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div>
      <main className={homeStyles.main}>
        <div className={homeStyles.mainImage}>
          <div className={homeStyles.mainImageText}>
            <div className={homeStyles.smartsimpleCloud}>
              <Image
                src='/images/logo.svg'
                width={110}
                height={110}
                alt='logo image'
              />
              <div>
                <h2 className='logo'>smartsimple</h2>
                <h1 className={homeStyles.cloud}>CLOUD</h1>
              </div>
            </div>

            <hr />
            <h1>Discover our secure solutions</h1>
            <p>
              From simple processes to complex data workflows, we help
              organizations securely control their unique operational data.
            </p>
          </div>
        </div>
        <div className='mt-5 mb-5'>
          <Cards />
        </div>
        <hr />
        <div className='mt-5'>
          <h1 className='title text-center'>
            Trusted by our growing community for 20 years
          </h1>
          <div className='text-center mt-5 mb-5'>
            <h3>Customers Logo Here</h3>
            <br />
            <button className='btn btn-outline-success text-center mt-5'>
              Read customer stories
            </button>
          </div>

          <div className={homeStyles.containerG}>
            <p className='text-white'>
              All of our end-to-end solutions come with best-in-class
              configurability to streamline your operations, your way. With
              personalization built into our technology and how we support you,
              we can transform your work for greater impact – no matter how
              complex or unique your goals may be.
            </p>
            <div className='text-center mt-5 mb-5'>
              <h3>
                smartsimple
                <br />
                CLOUD x 6
              </h3>
            </div>
          </div>
          <div>
            <h1 className='title text-center mt-5'>
              Discover more news and updates
            </h1>
            <h3 className='text-center mt-5 mb-5'>
              News and Updates x 5 <br />
              <button type='button' className='btn btn-outline-success mt-5'>
                More news & updates
              </button>
            </h3>
          </div>
          <div className={homeStyles.containerO}>
            <h3 className='text-white'>
              1.7M+ | $8.1B+ | 10K+
              <br />
              24/5 | 8.9/10 | 200+
              <br />
              <button type='button' className='btn btn-outline-light mt-5'>
                {' '}
                Learn about SmartSimple Software
              </button>
            </h3>
          </div>
          <div>
            <h1 className='title text-center mt-5'>
              We are partners in the success of your work
            </h1>
            <div className='text-center'>
              <h3 className='mt-5 mb-5'>Clients Story</h3>
            </div>
          </div>
          <div className={homeStyles.containerI}>
            <h2 className='title text-center'>See our solution in action</h2>
            <p>
              Request a demo to see how we can help you meet your technology
              goals.
            </p>
            <button type='button' className='btn btn-outline-danger'>
              Request Demo
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
