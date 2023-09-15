import React, { useCallback, useMemo } from 'react';
import Layout from '@/components/Layout';
import { getCategories } from '@/lib/hygraph/requests';
import { hygraphData, questionModal } from '@/lib/types';
import RoundOne from '@/components/RoundOne';
import { shuffle } from '@/lib/functions/functions';

export default function Home({ data }: hygraphData) {
  const dataArr: questionModal[] = useMemo(() => [], []);

  const roundOneCategories = useCallback(() => {
    for (const [key, value] of Object.entries(data)) {
      dataArr.push({
        category: key,
        questionDetails: value,
      });
    }
    shuffle(dataArr);
    return dataArr.slice(0, 6);
  }, [dataArr, data]);

  return (
    <Layout>
      <RoundOne categories={roundOneCategories()} />
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
