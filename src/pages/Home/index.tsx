import React from 'react';
import { Link } from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import Brand from '../../assets/svg/cup_games.svg';
import Controller from '../../assets/svg/controller.svg';
import Scratchs from '../../assets/svg/scratchs.svg';
import Circle from '../../assets/svg/circle.svg';
import Ring from '../../assets/svg/ring.svg';
import Triangle from '../../assets/svg/triangle.svg';

import { Container } from './styles';
import Button from '../../components/Button';

const Home: React.FC = () => {
  return (
    <Container>
      <div className='container home__content'>
        <section>
          <span>Boas vindas a</span>
          <picture>
            <img src={Brand} alt='Copa games' className='home__brand' />
          </picture>
          <p>
            A Lambda3 está organizando uma Copa do Mundo de games, e precisamos
            de sua ajuda para determinar quais games estarão no pódio e quem é o
            grande campeão. O resultado de cada partida é determinado de acordo
            com a nota do público para cada um dos games.
          </p>
          <div className='home__container-btn'>
            <Link to='/games'>
              <Button type='button'>Quero começar!</Button>
            </Link>
          </div>
        </section>
        <div className='home__container-elements'>
          <div className='home__container-controller'>
            <Fade top>
              <div className='home__scratchs-animation-1'>
                <img
                  src={Scratchs}
                  alt='controller'
                  className='floating-animation-1'
                />
              </div>
            </Fade>
            <Fade bottom>
              <div className='home__scratchs-animation-2'>
                <img
                  src={Scratchs}
                  alt='controller'
                  className='floating-animation-1'
                />
              </div>
            </Fade>
            <Fade right>
              <div className='home__circle-animation'>
                <img
                  src={Circle}
                  alt='controller'
                  className='floating-animation-2'
                />
              </div>
            </Fade>
            <Fade right>
              <div className='home__ring-animation'>
                <img
                  src={Ring}
                  alt='controller'
                  className='floating-animation-2'
                />
              </div>
            </Fade>
            <Fade top>
              <div className='home__triangle-animation'>
                <img
                  src={Triangle}
                  alt='controller'
                  className='floating-animation-2'
                />
              </div>
            </Fade>
            <Fade>
              <div className='home__controller-animation'>
                <img
                  src={Controller}
                  alt='controller'
                  className='shake-animation'
                />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
