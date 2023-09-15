export type questionDetails = {
  answer: string;
  question: string;
  questionNumber: string;
};

export type questionModal = {
  category: string;
  questionDetails: questionDetails[]
};