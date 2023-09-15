import React, { useRef } from 'react';
import { QuestionProps } from '@/lib/types';

function Question({ questionNum, questionDetails, updateCorrect }: QuestionProps) {
  const inputValue = useRef<HTMLInputElement | null>(null);

  return (
    <div className="flex-1">
      <p className="text-center text-2xl mb-8">{questionNum}. {questionDetails.question}</p>
      <div className="flex justify-center mb-8">
        <input
          ref={inputValue}
          className="w-full py-2 rounded-3xl text-center text-xl bg-black focus-visible:outline-white"
          type="text"
          id="answer"
          name="answer"
        />
      </div>
      <div className='flex justify-center'>
        <button className="bg-white text-primary border-2 border-white py-2 px-16 rounded-lg hover:border-white hover:bg-primary hover:text-white">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Question;