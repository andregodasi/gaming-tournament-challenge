import { IGame } from '../../services/cupService';

export const sortAlphabetically = (participants: IGame[]): IGame[] => {
  return participants.sort((participantA: IGame, participantB) => {
    if (participantA.titulo > participantB.titulo) {
      return 1;
    }
    if (participantA.titulo < participantB.titulo) {
      return -1;
    }
    return 0;
  });
};

export const getParticipants = (games: IGame[]): IGame[] => {
  return sortAlphabetically(games.filter(g => g.isSelected));
};

export const dispute = (participantA: IGame, participantB: IGame): IGame => {
  if (participantA.nota !== participantB.nota) {
    return participantA.nota > participantB.nota ? participantA : participantB;
  }

  if (participantA.ano !== participantB.ano) {
    return participantA.ano > participantB.ano ? participantA : participantB;
  }

  return sortAlphabetically([participantA, participantB])[0];
};

export const playQuarterFinals = (participants: IGame[]): IGame[] => {
  let winners: IGame[] = [];
  const numberOfGames = participants.length / 2;
  for (let rounds = 0; rounds < numberOfGames; rounds += 1) {
    const winner = dispute(participants[rounds], participants[7 - rounds]);
    winners = [...winners, winner];
  }
  return winners;
};

export const playSemiFinals = (participants: IGame[]): IGame[] => {
  const firstFinalist = dispute(participants[0], participants[1]);
  const secondFinalist = dispute(participants[2], participants[3]);

  return [firstFinalist, secondFinalist];
};

export const playFinal = (
  participants: IGame[],
): [IGame, IGame | undefined] => {
  const champion = dispute(participants[0], participants[1]);
  const viceChampion = participants.find(
    participant => champion.id !== participant.id,
  );

  return [champion, viceChampion];
};

export const getTitle = (title: string): string => {
  if (!title) {
    return '';
  }
  const lastIndex = title.lastIndexOf(' ');
  return title.substring(0, lastIndex);
};

export const getConsoleName = (title: string): string => {
  if (!title) {
    return '';
  }
  const lastIndex = title.lastIndexOf(' ');
  return title.substring(lastIndex).replace('(', '').replace(')', '');
};
