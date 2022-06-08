import Image from 'next/image';

const Cards = () => {
  return (
    <div className='row g-4 py-5 row-cols-1 row-cols-lg-4'>
      <div className='feature col'>
        <div>
          <Image
            src={'/images/card/card-image1.png'}
            width={265}
            height={146}
            alt='simplesmart image'
          />
        </div>
        <p>
          We will be closing most day-to-day business operations between July
          4-8th for our third Global Recharge Week.
        </p>
        <button className='btn btn-outline-success'>Read the blog</button>
      </div>

      <div className='feature col'>
        <div>
          <Image
            src={'/images/card/card-image2.png'}
            width={265}
            height={146}
            alt='simplesmart image'
          />
        </div>
        <p>
          Our May Newsletter is out. Meet our new team members, discover
          upcoming webinars and conferences, and more.
        </p>
        <button className='btn btn-outline-success'>Read more</button>
      </div>

      <div className='feature col'>
        <div>
          <Image
            src={'/images/card/card-image3.png'}
            width={265}
            height={146}
            alt='simplesmart image'
          />
        </div>
        <p>
          We’re excited to announce the launch of our new security-focused Trust
          Center.
        </p>
        <button className='btn btn-outline-success'>Visit Trust Center</button>
      </div>

      <div className='feature col'>
        <div>
          <Image
            src={'/images/card/card-image4.png'}
            width={265}
            height={146}
            alt='simplesmart image'
          />
        </div>
        <p>
          Discover features, training, integrations, and more inside the
          Marketplace.
        </p>
        <button className='btn btn-outline-success'>Visit Marketplace</button>
      </div>
    </div>
  );
};

export default Cards;
