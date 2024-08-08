import React, { useEffect } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Button from '../../components/Button';
import CardGame from '../../components/CardGame';
import { useCup } from '../../hooks/useCup';
import { IGame } from '../../services/cupService';
import { Container } from './styles';

const Champion: React.FC = () => {
  const history = useHistory();
  const { startCup, champion, viceChampion } = useCup();

  useEffect(() => {
    if (!champion || !viceChampion) {
      history.push('/games');
    }
  }, []);

  const handleResetChampionship = (): void => {
    startCup();
    history.push('/games');
  };

  return (
    <Container>
      <div className='champion__content'>
        <div className='champion__container-back container'>
          <Link to='/'>
            <FaChevronLeft color='var(--color-primary)' size={20} />
            <span>Voltar para o início</span>
          </Link>
          <h1 className='champion__title'>Seu resultado!</h1>
        </div>
        <div className='champion__container-overflow'>
          <div className='champion__container-cards'>
            <div className='champion__card-champion'>
              <Fade top>
                <CardGame
                  game={champion ? { ...champion } : ({} as IGame)}
                  isChampion
                />
              </Fade>
            </div>
            <div className='champion__card-vice-champion'>
              <Fade right>
                <CardGame
                  game={viceChampion ? { ...viceChampion } : ({} as IGame)}
                  isViceChampion
                />
              </Fade>
            </div>
          </div>
        </div>
        <div className='champion__redo-championship'>
          <Button type='button' onClick={handleResetChampionship}>
            Refazer campeonato
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Champion;
