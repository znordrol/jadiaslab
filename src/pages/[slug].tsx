import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import type { ParsedUrlQuery } from 'querystring';
import type { ReactNode } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { MdContentCopy } from 'react-icons/md';

import Button from '@/components/buttons/Button';
import Seo from '@/components/Seo';
import aslab from '@/data/aslab';
import { getCodeFromSlug, getNameFromSlug } from '@/data/brokenCode';

type LinkParams = {
  slug: string;
} & ParsedUrlQuery;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = aslab.map(({ first_link }) => ({
    params: { slug: first_link },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = ({ params }) => {
  const { slug } = params as LinkParams;
  const code = getCodeFromSlug(slug);
  const name = getNameFromSlug(slug);
  return { props: { name, code } };
};

type PageProp = {
  name: string;
  code: string;
  children?: ReactNode;
};

const Page: NextPage<PageProp> = ({ name, code }) => {
  return (
    <>
      <Seo templateTitle={`Halo ${name}`} />
      <main>
        <section className='bg-black text-primary-50'>
          <div className='layout my-8 flex min-h-screen flex-col items-center justify-center gap-y-40 text-center'>
            <div className='flex flex-col gap-y-4'>
              <h1 className='text-3xl'>Halo, {name}</h1>
              <div className='max-w-md space-y-4'>
                <p>
                  Di bawah adalah string yang terencode dengan base64. Ketika
                  kamu sudah mengencode nanti akan dapat kode C, tapi terdapat
                  kesalahan syntax sehingga tidak bisa dicompile. Perbaikilah
                  kode tersebut sehingga dapat di compile. Setelah dicompile dan
                  dijalankan akan ada output link, kunjungilah linknya
                </p>
                <CopyToClipboard text={code}>
                  <Button>
                    <MdContentCopy className='text-3xl' />
                  </Button>
                </CopyToClipboard>
                <pre className='whitespace-pre-wrap break-words'>{code}</pre>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
