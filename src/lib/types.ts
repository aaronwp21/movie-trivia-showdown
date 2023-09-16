export type questionDetails = {
  answer: string;
  question: string;
  questionNumber: string;
};

export type questionModal = {
  category: string;
  questionDetails: questionDetails[];
};

export type hygraphData = {
  data: {
    actionMoviess: questionDetails[];
    animatedMoviess: questionDetails[];
    fantasyMoviess: questionDetails[];
    movieReleaseDatess: questionDetails[];
    ninetiesMoviess: questionDetails[];
    nolanMoviess: questionDetails[];
    sciFiMoviess: questionDetails[];
    scorseseMoviess: questionDetails[];
    sportsMoviess: questionDetails[];
    starWarss: questionDetails[];
  };
};

export type QuestionProps = {
  questionNum: string,
  questionDetails: questionDetails,
  score: number
  updateScore: (score: number) => void;
  currentQuestionNum: number;
  updateCurrentQuestionNum: (newNum: number) => void;
}
