/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

import Seo from '@/components/Seo';

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <main>
        <section className='bg-black text-primary-50'></section>
      </main>
    </>
  );
};

export default Home;
