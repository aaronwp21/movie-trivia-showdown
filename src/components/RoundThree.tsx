import React, { useState } from 'react';
import { questionModal } from '@/lib/types';

type RoundThreeProps = {
  categories: questionModal[];
};

const round3Rules = [
  'Player Selects 3 Categories from 1 to 19',
  'Questions in Order Are Worth 2, 3, and 5 Points',
];

const oneToNineteen = [
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  '11',
  '12',
  '13',
  '14',
  '15',
  '16',
  '17',
  '18',
  '19',
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
      <div className={`${started ? 'flex' : 'hidden'} flex-col flex-1`}>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(45px,1fr))] gap-4">
          {oneToNineteen.map((number, i) => {
            return (
              <div
                key={i}
                className="rounded-full bg-black aspect-square max-w-[45px] flex justify-center items-center"
              >
                <p>{number}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RoundThree;
