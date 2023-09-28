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
  const [chosenNumbers, setChosenNumbers] = useState<number[]>([]);

  const selectNumber = (num: number) => {
    setChosenNumbers([...chosenNumbers, num]);
  };

  const deselectNumber = (num: number) => {
    const newArray = chosenNumbers.filter((number) => {
      return number !== num;
    });

    setChosenNumbers(newArray);
  };

  const checkNumber = (num: number) => {
    if (chosenNumbers.includes(num)) {
      deselectNumber(num);
    } else {
      if (chosenNumbers.length === 3) {
        return null;
      }
      selectNumber(num);
    }
  };

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
        <h2 className="mb-8 text-center text-lg font-bold underline underline-offset-4">
          Select 3 Numbers
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(45px,1fr))] gap-4 mb-8">
          {oneToNineteen.map((number, i) => {
            return (
              <div
                onClick={() => checkNumber(i + 1)}
                key={i}
                className={`rounded-full bg-black aspect-square max-w-[45px] flex justify-center items-center cursor-pointer ${
                  chosenNumbers.includes(i + 1)
                    ? 'bg-white text-primary font-bold'
                    : ''
                }`}
              >
                <p>{number}</p>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center">
          <button
            className={`px-8 py-2 rounded-lg ${
              chosenNumbers.length === 3
                ? 'bg-white text-primary font-bold cursor-pointer'
                : 'bg-gray-500'
            }`}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default RoundThree;
