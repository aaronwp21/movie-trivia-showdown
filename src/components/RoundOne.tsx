import React, { useState, useContext, useEffect } from 'react';
import { QuestionsContext } from './contexts/questions.context';
import { shuffleQuestions } from '@/lib/functions/functions';
import { questionDetails, questionModal } from '@/lib/types';
import Question from './Question';

type RoundOneProps = {
  categories: questionModal[];
};

const round1Rules = [
  'Each Competitor Get Six Questions From Six Pre-Determined Categories',
  'Questions Are Worth One Point Each',
];

function RoundOne({ categories }: RoundOneProps) {
  const [started, setStarted] = useState(false);
  const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<questionDetails[]>([]);

  useEffect(() => {
    if (currentQuestionNum === 6) {
      return;
    }

    setCurrentQuestion(
      shuffleQuestions(categories[currentQuestionNum].questionDetails),
    );
  }, [categories, currentQuestionNum]);

  const { round1Score, onUpdateRound1Score, onUpdateStartRound2 } = useContext(QuestionsContext);

  if (currentQuestionNum === 6) {
    onUpdateStartRound2(true);
    return <div className='hidden'></div>;
  }

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
            className="bg-white text-primary font-bold border-2 border-white py-2 px-16 rounded-lg hover:border-white hover:bg-primary hover:text-white"
          >
            Start
          </button>
        </div>
      </div>
      <div className={`${started ? 'flex' : 'hidden'} flex-col flex-1`}>
        <h2 className="text-xl underline">Round 1</h2>
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
        </div>
      </div>
    </>
  );
}

export default RoundOne;
