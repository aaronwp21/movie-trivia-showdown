import React, { useState } from 'react';
import { questionPickerRandomNumber } from '@/lib/functions/functions';

const categories = [
  'Action Movies',
  'Animated Movies',
  'Fantasy Movies',
  'Movie Release Dates',
  '90s Movies',
  'Nolan Movies',
  'Sci-Fi Movies',
  'Scorsese Movies',
  'Sports Movies',
  'Star Wars',
  `Spinner's Choice`,
  `Oppenent's Choice`,
];

function QuestionPicker() {
  const [selectedNum, setSelectedNum] = useState(-1);

  const spin = () => {
    setSelectedNum(questionPickerRandomNumber())
  }

  return (
    <>
      <ul className="mb-4 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 text-sm">
        {categories.map((category, i) => {
          return (
            <li key={i} className={`${selectedNum === i ? 'bg-white text-primary' : 'bg-black'} px-2 py-4 text-center`}>
              {category}
            </li>
          );
        })}
      </ul>
      <button onClick={() => spin()} className="bg-white text-primary font-bold border-2 border-white py-2 px-16 rounded-lg hover:border-white hover:bg-primary hover:text-white self-center">
        Spin
      </button>
    </>
  );
}

export default QuestionPicker;
