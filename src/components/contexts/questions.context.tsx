import React, { createContext, useState, useCallback } from 'react';

type QuestionsContextProps = {
  onUpdateRound1Score: (score: number) => void;
  onUpdateRound2Score: (score: number) => void;
  onUpdateStartRound2: (bool: boolean) => void;
  onUpdateStartRound3: (bool: boolean) => void;
  round1Score: number;
  round2Score: number;
  startRound2: boolean;
  startRound3: boolean;
};

export const QuestionsContext = createContext<QuestionsContextProps>({
  onUpdateRound1Score: () => null,
  onUpdateRound2Score: () => null,
  onUpdateStartRound2: () => null,
  onUpdateStartRound3: () => null,
  round1Score: 0,
  round2Score: 0,
  startRound2: false,
  startRound3: false,
});

export const QuestionsProvider = ({ children }: React.PropsWithChildren) => {
  const [round1Score, setRound1Score] = useState<number>(0);
  const [round2Score, setRound2Score] = useState<number>(0);
  const [startRound2, setStartRound2] = useState<boolean>(false);
  const [startRound3, setStartRound3] = useState<boolean>(false);

  const onUpdateRound1Score = useCallback((score: number) => {
    setRound1Score(score);
  }, []);

  const onUpdateRound2Score = useCallback((score: number) => {
    setRound2Score(score);
  }, []);

  const onUpdateStartRound2 = useCallback((bool: boolean) => {
    setStartRound2(bool);
  }, []);

  const onUpdateStartRound3 = useCallback((bool: boolean) => {
    setStartRound3(bool);
  }, [])

  return (
    <QuestionsContext.Provider
      value={{
        onUpdateRound1Score,
        onUpdateRound2Score,
        onUpdateStartRound2,
        onUpdateStartRound3,
        round1Score,
        round2Score,
        startRound2,
        startRound3
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};
