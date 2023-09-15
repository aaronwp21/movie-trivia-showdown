import React, { createContext, useState, useCallback } from 'react';

type QuestionsContextProps = {
  onUpdateRound1Score: (score: number) => void;
  round1Score: number;
};

export const QuestionsContext = createContext<QuestionsContextProps>({
  onUpdateRound1Score: () => null,
  round1Score: 0,
});

export const QuestionsProvider = ({ children }: React.PropsWithChildren) => {
  const [round1Score, setRound1Score] = useState<number>(0);

  const onUpdateRound1Score = useCallback((score: number) => {
    setRound1Score(score);
  }, []);

  return (
    <QuestionsContext.Provider
      value={{
        onUpdateRound1Score,
        round1Score,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};
