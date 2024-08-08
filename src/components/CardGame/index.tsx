import React, { HTMLAttributes } from 'react';
import { IGame } from '../../services/cupService';
import { getConsoleName, getTitle } from '../../shared/util/cup';

import { Container } from './styles';

interface ICardGameProps extends HTMLAttributes<HTMLDivElement> {
  game: IGame;
  isDisabled?: boolean;
  toggleIsSelect?: (id: string) => void;
  isChampion?: boolean;
  isViceChampion?: boolean;
}

const CardGame: React.FC<ICardGameProps> = ({
  game,
  isDisabled = false,
  toggleIsSelect,
  isChampion = false,
  isViceChampion = false,
  ...rest
}) => {
  const handleTogleIsSelect = (id: string): void => {
    if (!isDisabled && toggleIsSelect) {
      toggleIsSelect(id);
    }
  };
  return (
    <Container
      game={game}
      isDisabled={isDisabled}
      isChampion={isChampion}
      isViceChampion={isViceChampion}
      {...rest}
      onClick={() => handleTogleIsSelect(game.id)}>
      {(isChampion || isViceChampion) && (
        <div className='card-game__start'>{isChampion ? '1' : '2'}</div>
      )}
      <picture>
        <img
          className='card-game__img'
          src={game.urlImagem}
          alt={game.titulo}
        />
      </picture>
      {(isChampion || isViceChampion) && (
        <div className='card-game__classification'>
          {isChampion ? 'Primeiro lugar' : 'Segundo lugar'}
        </div>
      )}
      <div className='card-game__title'>{getTitle(game.titulo)}</div>
      <div className='card-game__description'>
        {game.ano}/{getConsoleName(game.titulo)}
      </div>
    </Container>
  );
};

export default CardGame;
