import React, { createContext, useContext, useState } from 'react';
import { getGames, IGame } from '../services/cupService';
import {
  getParticipants,
  playFinal,
  playQuarterFinals,
  playSemiFinals,
} from '../shared/util/cup';

interface ICupData {
  startCup(): Promise<void | IGame[]>;
  generateChampionship(): void;
  toggleGameIsSelect(id: string): void;
  games: IGame[];
  champion: IGame | undefined;
  viceChampion: IGame | undefined;
  startCupLoading: boolean;
}

const CupContext = createContext<ICupData>({} as ICupData);

const CupProvider: React.FC = ({ children }) => {
  const [games, setGames] = useState<IGame[]>([]);
  const [champion, setChampion] = useState<IGame>();
  const [viceChampion, setViceChampion] = useState<IGame>();
  const [startCupLoading, setStartCupLoading] = useState<boolean>(false);

  const toggleGameIsSelect = (id: string): void => {
    setGames(
      games.map((game: IGame) => {
        if (game.id === id) {
          return { ...game, isSelected: !game.isSelected };
        }
        return { ...game };
      }),
    );
  };

  const startCup = async (): Promise<void | IGame[]> => {
    setStartCupLoading(true);
    return getGames().then((gamesData: IGame[]): IGame[] => {
      setStartCupLoading(false);
      setGames([...gamesData]);
      return gamesData;
    });
  };

  const generateChampionship = (): void => {
    const participants = getParticipants(games);
    if (participants.length !== 8) {
      throw new Error('Selecione ao menos 8 games para gerar um campeonato.');
    }
    const participantsSemifinals = playQuarterFinals(participants);
    const participantsFinal = playSemiFinals(participantsSemifinals);
    const [championData, viceChampionData] = playFinal(participantsFinal);
    setChampion(championData);
    setViceChampion(viceChampionData);
  };

  return (
    <CupContext.Provider
      value={{
        startCup,
        generateChampionship,
        games,
        toggleGameIsSelect,
        champion,
        viceChampion,
        startCupLoading,
      }}>
      {children}
    </CupContext.Provider>
  );
};

function useCup(): ICupData {
  const context = useContext(CupContext);
  if (!context) {
    throw new Error('useCup must be used within a CupProvider');
  }
  return context;
}

export { CupProvider, useCup };
