import React, { useState, useContext } from 'react';
import { QuestionsContext } from './contexts/questions.context';
import { questionModal } from '@/lib/types';
import Question from './Question';

type RoundThreeProps = {
  categories: questionModal[];
};

const round3Rules = [
  'Player Selects 3 Categories from 1 to 19',
  'Questions Are Worth 1 Point Each',
];

const oneToTen = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

function RoundThree({ categories }: RoundThreeProps) {
  const [started, setStarted] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [chosenNumbers, setChosenNumbers] = useState<number[]>([]);
  const [chosenNumbersForArr, setChosenNumbersForArr] = useState<number[]>([]);
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);

  const { round3Score, onUpdateRound3Score, onUpdateStartResults } =
    useContext(QuestionsContext);

  const selectNumber = (num: number) => {
    setChosenNumbers([...chosenNumbers, num]);
    setChosenNumbersForArr([...chosenNumbersForArr, num - 1])
  };

  const deselectNumber = (num: number) => {
    const newArray = chosenNumbers.filter((number) => {
      return number !== num;
    });

    const newArrayForNumbers = chosenNumbers.filter((number) => {
      return number !== num - 1;
    });

    setChosenNumbers(newArray);
    setChosenNumbersForArr(newArrayForNumbers);
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

  if (currentQuestionNum === 3) {
    onUpdateStartResults(true);
    return <div className="hidden"></div>;
  }

  return (
    <>
      <div className={`${started ? 'hidden' : 'flex'} flex-1`}>
        <div className="flex-1 flex flex-col items-center justify-center gap-12">
          <h2 className="text-3xl underline underline-offset-4">
            Round 3 Rules
          </h2>
          <ul className="text-xl flex flex-col gap-12 list-disc p-4 sm:text-2xl">
            {round3Rules.map((rule, i) => {
              return <li key={i}>{rule}</li>;
            })}
          </ul>
          <button
            onClick={() => setStarted(true)}
            className="bg-white text-primary font-bold border-2 border-white py-2 px-16 rounded-lg hover:border-white hover:bg-primary hover:text-white sm:text-2xl"
          >
            Start
          </button>
        </div>
      </div>
      <div className={`${started ? 'flex' : 'hidden'} flex-col flex-1 justify-center w-full max-w-[1000px] mx-auto`}>
        {!confirmed ? (
          <>
            <h2 className="mb-8 text-center text-xl font-bold underline underline-offset-4 sm:text-3xl sm:mb-12">
              Select 3 Numbers
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-8 sm:mb-12">
              {oneToTen.map((number, i) => {
                return (
                  <div
                    onClick={() => checkNumber(i + 1)}
                    key={i}
                    className={`rounded-full bg-black aspect-square w-full max-w-[45px] flex justify-center items-center cursor-pointer ${
                      chosenNumbers.includes(i + 1)
                        ? 'bg-white text-primary font-bold'
                        : 'text-white'
                    } sm:max-w-[75px] sm:text-2xl`}
                  >
                    <p>{number}</p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center">
              <button
                onClick={chosenNumbers.length === 3 ? () => setConfirmed(true) : () => ''}
                className={`px-8 py-2 rounded-lg ${
                  chosenNumbers.length === 3
                    ? 'bg-white text-primary font-bold cursor-pointer'
                    : 'bg-gray-500 cursor-not-allowed'
                } sm:text-2xl`}
              >
                Confirm
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center">
            <Question
              questionNum={String(currentQuestionNum + 1)}
              questionDetails={
                categories[chosenNumbersForArr[currentQuestionNum]].questionDetails[
                  currentQuestionNum
                ]
              }
              score={round3Score}
              updateScore={onUpdateRound3Score}
              currentQuestionNum={currentQuestionNum}
              updateCurrentQuestionNum={setCurrentQuestionNum}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default RoundThree;
