import React from 'react';
import Layout from '@/components/Layout';
import { getCategories } from '@/lib/hygraph/requests';
import { hygraphData } from '@/lib/types';
import RoundOne from '@/components/RoundOne';

export default function Home({ data }: hygraphData) {

  return (
    <Layout>
      <RoundOne data={data} />
    </Layout>
  );
}

export async function getStaticProps() {
  const data = await getCategories();

  return {
    props: {
      data,
    },
  };
}
