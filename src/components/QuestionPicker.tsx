import React, { useState } from 'react';
import {
  questionPickerRandomNumber,
  shuffle3Questions,
} from '@/lib/functions/functions';
import { questionDetails, questionModal } from '@/lib/types';

type QuestionPickerProps = {
  allCategories: questionModal[];
  setChosenCategoryArr: React.Dispatch<React.SetStateAction<questionDetails[]>>;
};

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
];

function QuestionPicker({
  allCategories,
  setChosenCategoryArr,
}: QuestionPickerProps) {
  const [spinNum, setSpinNum] = useState(0);
  const [selectedNum, setSelectedNum] = useState(-1);

  const pick3Questions = () => {
    const shuffled = shuffle3Questions(
      allCategories[selectedNum].questionDetails,
    );
    return shuffled;
  };

  const onSpin = () => {
    setSpinNum(spinNum + 1);
    const num = questionPickerRandomNumber();
    setSelectedNum(num);
  };

  const onKeep = () => {
    switch (selectedNum) {
      case 10:
        console.log('spinners choice');
        break;
      default:
        setChosenCategoryArr(pick3Questions());
        break;
    }
  };

  return (
    <>
      <ul className="mb-8 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4 text-sm">
        {categories.map((category, i) => {
          return (
            <li
              onClick={() => {
                if(selectedNum === 10) {
                  setSelectedNum(i);
                }
              }}
              key={i}
              className={`${
                selectedNum === i
                  ? 'bg-white text-primary font-bold'
                  : 'bg-black text-white'
              } px-2 py-4 text-center ${
                selectedNum === 10
                  ? 'hover:bg-white hover:text-primary hover:font-bold hover:cursor-pointer'
                  : ''
              }`}
            >
              {category}
            </li>
          );
        })}
      </ul>
      <p
        className={`${
          spinNum === 0 || spinNum === 2 ? 'hidden' : 'block'
        } text-center text-lg font-semibold mb-4`}
      >
        Would You Like to Spin Again?
      </p>
      <p
        className={`${
          selectedNum === 10 ? 'block' : 'hidden'
        } text-center text-lg font-semibold mb-4`}
      >
        Please Select a Category
      </p>
      <div className="flex justify-center gap-4">
        <button
          onClick={() => onSpin()}
          className={`${
            spinNum === 2 ? 'hidden' : 'block'
          } bg-white text-primary font-bold border-2 border-white py-2 px-16 rounded-lg hover:border-white hover:bg-primary hover:text-white`}
        >
          Spin
        </button>
        <button
          onClick={() => onKeep()}
          className={`${
            spinNum === 0 ? 'hidden' : 'block'
          } bg-black text-white font-bold py-2 px-16 rounded-lg`}
        >
          Keep
        </button>
      </div>
    </>
  );
}

export default QuestionPicker;
