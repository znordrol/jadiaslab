/* eslint-disable @next/next/no-img-element */
import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { ReactNode } from 'react';

import Seo from '@/components/Seo';
import aslab from '@/data/aslab';
import {
  getAccFrom2ndSlug,
  getImgFrom2ndSlug,
  getNameFrom2ndSlug,
} from '@/data/brokenCode';

type LinkParams = {
  slug: string;
} & ParsedUrlQuery;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = aslab.map(({ second_link }) => ({
    params: { slug: second_link },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params as LinkParams;
  const acc = getAccFrom2ndSlug(slug);
  const name = getNameFrom2ndSlug(slug);
  const img = getImgFrom2ndSlug(slug);
  return { props: { name, acc, ...(img && { img }) } };
};

type PageProp = {
  name: string;
  acc: boolean;
  img?: string;
  children?: ReactNode;
};

const Page: NextPage<PageProp> = ({ name, acc, img }) => {
  return (
    <>
      <Seo templateTitle={`Halo ${name}`} />
      <main>
        <section className='bg-black text-primary-50'>
          <div className='layout my-8 flex min-h-screen flex-col items-center justify-center gap-y-40 text-center'>
            <div className='flex flex-col gap-y-4'>
              <h1 className='text-3xl'>Halo, {name}</h1>
              <div className='max-w-md space-y-4'>
                {acc && img && <img src={img} alt='Muka anda' />}
                <p>
                  {acc
                    ? 'Selamat, kamu diterima sebagai aslab B201 🎉'
                    : 'Kamu sudah melakukan usaha terbaikmu, namun kamu belum dapat diterima sebagai aslab B201, tetap semangat dan pantang menyerah 💪'}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
