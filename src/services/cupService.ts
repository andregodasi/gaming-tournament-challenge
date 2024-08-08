import api from './api';

export interface IGame {
  ano: number;
  id: string;
  nota: number;
  titulo: string;
  urlImagem: string;
  isSelected: boolean;
}

export const getGames = async (): Promise<IGame[]> => {
  const response = await api.get('Competidores', {
    params: {
      copa: 'games',
    },
  });
  return response.data;
};
