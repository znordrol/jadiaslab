import type { NextPage } from 'next';

import Seo from '@/components/Seo';

const NotFound: NextPage = () => (
  <>
    <Seo templateTitle='Not Found' />
    <main>
      <section className='bg-black text-primary-50'>Salah link ya</section>
    </main>
  </>
);

export default NotFound;
