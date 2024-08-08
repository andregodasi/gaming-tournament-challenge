import {
  dispute,
  getConsoleName,
  getParticipants,
  getTitle,
  playFinal,
  playQuarterFinals,
  playSemiFinals,
  sortAlphabetically,
} from './cup';
import {
  getParticipantsMock,
  looser,
  participantsSortAlphabeticallyMock,
  playFinalMock,
  playQuarterFinalsMock,
  playSemiFinalsMock,
  winner,
} from './cupMock';

test('should be able to ordered alphabetically list of games ', () => {
  const sortArray = sortAlphabetically(participantsSortAlphabeticallyMock);

  expect(sortArray[0]?.titulo).toBe(
    'The Legend of Zelda: Ocarina of Time (N64)',
  );
});

test('should be able to search selected participants', () => {
  const participants = getParticipants(getParticipantsMock);

  expect(participants.length).toBe(3);
});

test('should be able to return the winner', () => {
  const winnerDispute = dispute(winner, looser);

  expect(winnerDispute.id).toBe(winner.id);
});

test('should be able to run the quarter finals', () => {
  const winners = playQuarterFinals(playQuarterFinalsMock);

  expect(winners[0].id).toBe(playQuarterFinalsMock[7].id);
  expect(winners[1].id).toBe(playQuarterFinalsMock[1].id);
  expect(winners[2].id).toBe(playQuarterFinalsMock[5].id);
  expect(winners[3].id).toBe(playQuarterFinalsMock[3].id);
});

test('should be able to run the semi finals', () => {
  const winners = playSemiFinals(playSemiFinalsMock);

  expect(winners[0].id).toBe(playSemiFinalsMock[0].id);
  expect(winners[1].id).toBe(playSemiFinalsMock[2].id);
});

test('should be able to run the finals', () => {
  const [champion, viceChampion] = playFinal(playFinalMock);

  expect(champion.id).toBe(playFinalMock[1].id);
  expect(viceChampion?.id).toBe(playFinalMock[0].id);
});

test('should be able to return title clean', () => {
  expect('The Legend of Zelda: Ocarina of Time').toBe(
    getTitle('The Legend of Zelda: Ocarina of Time (N64)'),
  );
});

test('should be able to return console name', () => {
  expect(' N64').toBe(
    getConsoleName('The Legend of Zelda: Ocarina of Time (N64)'),
  );
});
