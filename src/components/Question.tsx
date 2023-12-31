import React, { useRef } from 'react';
import { QuestionProps } from '@/lib/types';

function Question({ questionNum, questionDetails, score, updateScore, currentQuestionNum, updateCurrentQuestionNum }: QuestionProps) {
  const inputValue = useRef<HTMLInputElement | null>(null);

  const onSubmit = () => {
    if (inputValue.current) {
      if (inputValue.current.value.toLowerCase() === questionDetails.answer.toLowerCase()) {
        updateScore(score + 1)
        inputValue.current.value = ''
        updateCurrentQuestionNum(currentQuestionNum + 1);
      } else {
        inputValue.current.value = ''
        updateCurrentQuestionNum(currentQuestionNum + 1);
      }
    }
  }

  return (
    <div className="flex-1 max-w-[1000px] m-auto">
      <p className="text-center text-2xl mb-8">{questionNum}. {questionDetails.question}</p>
      <div className="flex justify-center mb-8">
        <input
          ref={inputValue}
          className="w-full py-2 rounded-3xl text-center text-xl text-white bg-black focus-visible:outline-white"
          type="text"
          id="answer"
          name="answer"
        />
      </div>
      <div className='flex justify-center'>
        <button onClick={onSubmit} className="bg-white text-primary border-2 border-white py-2 px-16 rounded-lg hover:border-white hover:bg-primary hover:text-white sm:text-2xl">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Question;
