import React, { useState } from 'react'
import { questionModal } from '@/lib/types';
import QuestionPicker from './QuestionPicker';

type RoundTwoProps = {
  categories: questionModal[];
};

const round2Rules = [
  'Spin the Category Wheel',
  `Can Spin Again Once if You Don't Like the Category`,
  '3 Questions Worth 2 Points',
  'If Multiple Choice is Selected Questions Go Down to 1 Point',
  'If Competitor Misses It Can Be Stolen'
]

function RoundTwo({ categories }: RoundTwoProps) {
  const [started, setStarted] = useState(false);

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
          <QuestionPicker />
          {/* <h2 className="text-xl underline">Round 1</h2>
          <h3 className="text-lg">
            Category: {started ? categories[currentQuestionNum].category : ''}
          </h3>
          <div className="flex-1 flex items-center">
            {started ? (
              <Question
                questionNum={String(currentQuestionNum + 1)}
                questionDetails={currentQuestion[0]}
                score={round1Score}
                updateScore={onUpdateRound1Score}
                currentQuestionNum={currentQuestionNum}
                updateCurrentQuestionNum={setCurrentQuestionNum}
              />
            ) : (
              ''
            )}
          </div> */}
        </div>
    </>
  )
}

export default RoundTwo