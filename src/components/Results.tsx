import React, { useContext } from 'react';
import { QuestionsContext } from './contexts/questions.context';

function Results() {
  const { round1Score, round2Score, round3Score } =
    useContext(QuestionsContext);

  const total = round1Score + round2Score + round3Score;

  return (
    <div className="flex flex-col flex-1 justify-center w-full max-w-[1000px] mx-auto">
      <h2 className="mb-8 text-center text-2xl font-semibold underline underline-offset-4 sm:text-4xl">
        Results
      </h2>
      <div>
        <ol className='text-xl flex flex-col gap-6 text-center sm:text-2xl'>
          <li className='p-2 border-2'>
            <span className='font-semibold'>Round 1:</span> {round1Score} / 6
          </li>
          <li className='p-2 border-2'>
            <span className='font-semibold'>Round 2:</span> {round2Score} / 3
          </li>
          <li className='p-2 border-2'>
            <span className='font-semibold'>Round 3:</span> {round3Score} / 3
          </li>
          <li className='p-2 border-2 text-2xl sm:text-4xl'>
            <span className='font-semibold'>Total:</span> {total} / 12 = <span className='font-bold'>{(100 * total) / 12}%</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Results;
