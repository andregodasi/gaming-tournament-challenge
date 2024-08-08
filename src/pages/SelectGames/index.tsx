import React, { useEffect, useState } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import BrandGreen from '../../assets/svg/cup_games_green.svg';
import Button from '../../components/Button';
import CardGame from '../../components/CardGame';
import { useCup } from '../../hooks/useCup';
import { IGame } from '../../services/cupService';

import { Container } from './styles';

const SelectGames: React.FC = () => {
  const history = useHistory();
  const { startCup, generateChampionship, toggleGameIsSelect, games } =
    useCup();
  const [amountIsSelected, setAmountIsSelected] = useState<number>(0);

  useEffect(() => {
    if (games && games.length <= 0) {
      startCup();
    }
  }, []);

  useEffect(() => {
    if (games) {
      setAmountIsSelected(games.filter(game => game.isSelected).length);
    }
  }, [games]);

  const handleIsDisabled = (isSelected: boolean): boolean => {
    return !isSelected && amountIsSelected >= 8;
  };

  const hadleIsDisabledGenerateChampionship = (): boolean => {
    return amountIsSelected >= 8;
  };

  const handleGenerateChampionship = (): void => {
    generateChampionship();
    history.push('/champion');
  };

  return (
    <Container className='container'>
      <div className='select-games__container-back'>
        <Link to='/'>
          <FaChevronLeft color='var(--color-primary)' size={20} />
          <span>Voltar para o início</span>
        </Link>
        <picture className='select-games__brand'>
          <img src={BrandGreen} alt='Copa games' />
        </picture>
      </div>
      <div className='select-games__container-select-info'>
        <div>1. Seleção</div>
        <p>
          Para começar, selecione 8 jogos para entrar na competição e depois
          clique em Gerar Campeonato para prosseguir.
        </p>
      </div>
      <div className='select-games__generate-championship'>
        <div className='select-games__counter-description'>
          <span className='select-games__counter'>{amountIsSelected} de 8</span>{' '}
          selecionados
        </div>
        <Button
          type='button'
          disabled={!hadleIsDisabledGenerateChampionship()}
          onClick={handleGenerateChampionship}
          className='select-games__btn-generate'>
          Gerar campeonato
        </Button>
      </div>
      <div className='games__section'>
        {games.map((game: IGame) => (
          <CardGame
            key={game.id}
            game={game}
            toggleIsSelect={toggleGameIsSelect}
            isDisabled={handleIsDisabled(game.isSelected)}
          />
        ))}
      </div>
      <div className='games__sticky'>
        <Button
          type='button'
          disabled={!hadleIsDisabledGenerateChampionship()}
          onClick={handleGenerateChampionship}>
          Gerar campeonato
        </Button>
      </div>
    </Container>
  );
};

export default SelectGames;
