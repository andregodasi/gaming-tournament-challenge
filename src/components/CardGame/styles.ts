import { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { IGame } from '../../services/cupService';
import Start from '../../assets/svg/star.svg';

interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
  game: IGame;
  isDisabled: boolean;
  isChampion: boolean;
  isViceChampion: boolean;
}

export const Container = styled.div<IContainerProps>`
  width: 100%;
  cursor: pointer;
  position: relative;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      cursor: default;
    `}
  .card-game__img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    border-radius: 4px;

    ${({ game, isChampion, isViceChampion }) =>
      game.isSelected &&
      !isChampion &&
      !isViceChampion &&
      css`
        border: 5px solid var(--light-purple);
      `}
    ${({ isDisabled }) =>
      isDisabled &&
      css`
        border: 0;
        opacity: 0.5;
      `}
    transition: opacity 0.5s;
  }

  .card-game__classification {
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.313rem;
    letter-spacing: 0em;
    margin-top: 32px;
    color: ${({ theme }) => theme.text};
  }

  .card-game__title {
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0.875rem;
    letter-spacing: 0em;
    margin: 12px 0;
  }

  .card-game__description {
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 0.75rem;
    letter-spacing: 0em;
  }

  ${({ isChampion, isViceChampion }) =>
    (isChampion || isViceChampion) &&
    css`
      cursor: default;

      .card-game__start {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        background-size: contain;
        width: 60px;
        height: 60px;
        background-image: url(${Start});
        color: var(--black-blue);
        font-size: 1.6rem;
        font-weight: bold;
        top: -26px;
        left: -26px;

        ${isChampion &&
        css`
          width: 92px;
          height: 92px;
          top: -42px;
          left: -42px;
          font-size: 2.5rem;
        `}
      }

      .card-game__img {
        background-image: linear-gradient(white, white),
          linear-gradient(to bottom, #56ccf2, rgba(86, 204, 242, 0), #56ccf2);
        border-radius: 4px;
        border: double 5px transparent;
        background-origin: border-box;
        background-clip: content-box, border-box;
        ${isChampion
          ? css`
              height: 262px;
            `
          : css`
              height: 190px;
            `}
      }
      .card-game__title {
        font-size: 1.5rem;
        line-height: 1.75rem;
        color: ${({ theme }) => theme.text};
      }

      .card-game__description {
        font-size: 1.125rem;
        line-height: 1.313rem;
        color: ${({ theme }) => theme.text};
      }
    `}

  @media(min-width: 768px) {
    .card-game__title {
      font-size: 1.125rem;
      line-height: 1.313rem;
    }

    .card-game__description {
      font-size: 0.875rem;
      line-height: 1.063rem;
      letter-spacing: 0em;
    }

    ${({ isChampion, isViceChampion }) =>
      (isChampion || isViceChampion) &&
      css`
        .card-game__img {
          ${isChampion
            ? css`
                height: 365px;
              `
            : css`
                height: 303px;
              `}
        }
      `}
  }
`;
