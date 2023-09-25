import React, { useState, useContext } from 'react';
import { QuestionsContext } from './contexts/questions.context';
import { questionDetails, questionModal } from '@/lib/types';
import QuestionPicker from './QuestionPicker';
import Question from './Question';

type RoundTwoProps = {
  categories: questionModal[];
};

const round2Rules = [
  'Spin the Category Wheel',
  `Can Spin Again Once if You Don't Like the Category`,
  '3 Questions Worth 2 Points',
  'If Multiple Choice is Selected Questions Go Down to 1 Point',
  'If Competitor Misses It Can Be Stolen',
];

function RoundTwo({ categories }: RoundTwoProps) {
  const [started, setStarted] = useState(false);
  const [chosenCategoryArr, setChosenCategoryArr] = useState<questionDetails[]>(
    [],
  );
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);

  const { round2Score, onUpdateRound2Score } = useContext(QuestionsContext);

  if (currentQuestionNum === 3) {
    console.log('questions answered')
    return <div className='hidden'></div>;
  }

  return (
    <>
      <div className={`${started ? 'hidden' : 'flex'} flex-1`}>
        <div className="flex-1 flex flex-col items-center justify-center gap-12">
          <h2 className="text-3xl underline underline-offset-4">
            Round 2 Rules
          </h2>
          <ul className="text-xl flex flex-col gap-12 list-disc p-4">
            {round2Rules.map((rule, i) => {
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
        {chosenCategoryArr.length === 0 ? (
          <QuestionPicker
            allCategories={categories}
            setChosenCategoryArr={setChosenCategoryArr}
          />
        ) : (
          <>
            <h2 className="text-xl underline">Round 2</h2>
            <div className="flex-1 flex items-center">
              {started ? (
                <Question
                  questionNum={String(currentQuestionNum + 1)}
                  questionDetails={chosenCategoryArr[currentQuestionNum]}
                  score={round2Score}
                  updateScore={onUpdateRound2Score}
                  currentQuestionNum={currentQuestionNum}
                  updateCurrentQuestionNum={setCurrentQuestionNum}
                />
              ) : (
                ''
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default RoundTwo;
