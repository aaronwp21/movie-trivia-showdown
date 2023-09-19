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
  const [spinNum, setSpinNum] = useState(0);
  const [selectedNum, setSelectedNum] = useState(-1);

  const spin = () => {
    setSpinNum(spinNum + 1);
    const num = questionPickerRandomNumber();
    setSelectedNum(num);
    if (spinNum === 0) {

    }
  }

  return (
    <>
      <ul className="mb-4 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 text-sm">
        {categories.map((category, i) => {
          return (
            <li key={i} className={`${selectedNum === i ? 'bg-white text-primary font-bold' : 'bg-black'} px-2 py-4 text-center`}>
              {category}
            </li>
          );
        })}
      </ul>
      <p className={`${spinNum === 0 ? 'hidden' : 'block'} text-center text-lg font-semibold mb-4`}>Would You Like to Spin Again?</p>
      <div className='flex justify-center gap-4'>
        <button onClick={() => spin()} className="bg-white text-primary font-bold border-2 border-white py-2 px-16 rounded-lg hover:border-white hover:bg-primary hover:text-white">
          Spin
        </button>
        <button className={`${spinNum === 0 ? 'hidden' : 'block'} bg-black text-white font-bold py-2 px-16 rounded-lg`}>
          Keep
        </button>
      </div>
    </>
  );
}

export default QuestionPicker;
