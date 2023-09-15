import React, { useMemo, useCallback } from 'react';
import { shuffle } from '@/lib/functions/functions';
import { hygraphData, questionModal } from '@/lib/types';

function RoundOne({ data }: hygraphData) {
  const dataArr: questionModal[] = useMemo(() => [], []);

  for (const [key, value] of Object.entries(data)) {
    dataArr.push({
      category: key,
      questionDetails: value,
    });
  }

  const getCategories = useCallback(() => {
    shuffle(dataArr);
    return dataArr.slice(0, 6);
  }, [dataArr]);

  return <div>RoundOne</div>;
}

export default RoundOne;
