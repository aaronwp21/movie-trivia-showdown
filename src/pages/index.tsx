import React, { useCallback, useEffect, useState, useMemo, useContext } from 'react';
import { QuestionsContext } from '@/components/contexts/questions.context';
import Layout from '@/components/Layout';
import { getCategories } from '@/lib/hygraph/requests';
import { hygraphData, questionModal } from '@/lib/types';
import RoundOne from '@/components/RoundOne';
import { shuffle } from '@/lib/functions/functions';
import RoundTwo from '@/components/RoundTwo';
import RoundThree from '@/components/RoundThree';
import Results from '@/components/Results';

export default function Home({ data }: hygraphData) {
  const dataArr: questionModal[] = useMemo(() => [], []);
  const allQuestions: questionModal[] = useMemo(() => [], []);
  const [roundThreeCategories, setRoundThreeCategories] = useState<questionModal[]>([]);

  const { startRound2, startRound3, startResults } =
    useContext(QuestionsContext);

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

  useEffect(() => {
    const categories = [];
    for (const [key, value] of Object.entries(data)) {
      categories.push({
        category: key,
        questionDetails: value,
      });
    }
    shuffle(categories);
    setRoundThreeCategories(categories);
  }, [data]);

  return (
    <Layout>
      {startRound2 === false ? (
        <RoundOne categories={roundOneCategories()} />
      ) : (
        ''
      )}
      {startRound2 === true && startRound3 === false ? (
        <RoundTwo categories={allCategories()} />
      ) : (
        ''
      )}
      {startRound3 === true && startResults === false ? (
        <RoundThree categories={roundThreeCategories} />
      ) : (
        ''
      )}
      {startResults === true ? <Results /> : ''}
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
