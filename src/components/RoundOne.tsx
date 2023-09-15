import { questionModal } from '@/lib/types';
import React, { useState } from 'react';

type RoundOneProps = {
  categories: questionModal[]
}

const round1Rules = [
  'Each Competitor Get Six Questions From Six Pre-Determined Categories',
  'Questions Are Worth One Point Each',
];

function RoundOne({ categories }: RoundOneProps) {
  const [started, setStarted] = useState(false);

  return (
    <>
      <div className={`${started ? 'hidden' : 'flex'} flex-1`}>
        <div className="flex-1 flex flex-col items-center justify-center gap-12">
          <h2 className="text-3xl underline underline-offset-4">
            Round 1 Rules
          </h2>
          <ul className="text-xl flex flex-col gap-12 list-disc p-4">
            {round1Rules.map((rule, i) => {
              return <li key={i}>{rule}</li>;
            })}
          </ul>
          <button
            onClick={() => setStarted(true)}
            className="bg-white text-primary border-2 border-white py-2 px-16 rounded-lg hover:border-white hover:bg-primary hover:text-white"
          >
            Start
          </button>
        </div>
      </div>
    </>
  );
}

export default RoundOne;
