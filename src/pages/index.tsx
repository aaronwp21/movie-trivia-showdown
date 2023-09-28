import React, { useCallback, useMemo, useContext } from 'react';
import { QuestionsContext } from '@/components/contexts/questions.context';
import Layout from '@/components/Layout';
import { getCategories } from '@/lib/hygraph/requests';
import { hygraphData, questionModal } from '@/lib/types';
import RoundOne from '@/components/RoundOne';
import { shuffle } from '@/lib/functions/functions';
import RoundTwo from '@/components/RoundTwo';
import RoundThree from '@/components/RoundThree';

export default function Home({ data }: hygraphData) {
  const dataArr: questionModal[] = useMemo(() => [], []);
  const allQuestions: questionModal[] = useMemo(() => [], []);

  const { startRound2, startRound3 } = useContext(QuestionsContext);

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

  const allCategories = useCallback(() => {
    for (const [key, value] of Object.entries(data)) {
      allQuestions.push({
        category: key,
        questionDetails: value,
      });
    }
    return allQuestions;
  }, [allQuestions, data]);

  const roundThreeCategories = useCallback(() => {
    for (const [key, value] of Object.entries(data)) {
      dataArr.push({
        category: key,
        questionDetails: value,
      });
    }
    shuffle(dataArr);
    return dataArr;
  }, [dataArr, data]);

  return (
    <Layout>
      {/* {startRound2 === false ? <RoundOne categories={roundOneCategories()} /> : ''}
      {startRound2 === true && startRound3 === false ? <RoundTwo categories={allCategories()} /> : ''}
      {startRound3 === true ? <RoundThree categories={allCategories()} /> : ''} */}
      <RoundThree categories={roundThreeCategories()} />
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
