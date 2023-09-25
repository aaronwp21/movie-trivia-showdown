import React, { useState } from 'react';
import { questionModal } from '@/lib/types';

type RoundThreeProps = {
  categories: questionModal[];
};

const round3Rules = [
  'Player Selects 3 Categories from 1 to 19',
  'Questions in Order Are Worth 2, 3, and 5 Points',
];

function RoundThree({ categories }: RoundThreeProps) {
  const [started, setStarted] = useState(false);

  return (
    <>
      <div className={`${started ? 'hidden' : 'flex'} flex-1`}>
        <div className="flex-1 flex flex-col items-center justify-center gap-12">
          <h2 className="text-3xl underline underline-offset-4">
            Round 3 Rules
          </h2>
          <ul className="text-xl flex flex-col gap-12 list-disc p-4">
            {round3Rules.map((rule, i) => {
              return <li key={i}>{rule}</li>;
            })}
          </ul>
          <button
            onClick={() => setStarted(true)}
            className="bg-white text-primary font-bold border-2 border-white py-2 px-16 rounded-lg hover:border-white hover:bg-primary hover:text-white"
          >
            Start
          </button>
        </div>
      </div>
    </>
  );
}

export default RoundThree;
