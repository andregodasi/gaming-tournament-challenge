import styled from 'styled-components';

export const Container = styled.main`
  padding-bottom: 100px;
  .select-games__container-back {
    margin-top: 26px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

    a {
      color: ${({ theme }) => theme.primary};
      font-size: 0.875rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.063rem;
      letter-spacing: 0em;
      text-decoration: none;
      display: flex;
      align-items: center;

      span {
        display: none;
      }

      svg {
        margin-right: 18px;
      }
    }
  }

  .select-games__counter-description {
    color: ${({ theme }) => theme.primary};
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25rem;
    letter-spacing: 0em;
  }

  .select-games__counter {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.secondary};
    font-weight: bold;
  }

  .select-games__brand {
    justify-self: center;
    display: flex;
    align-items: flex-end;
    img {
      height: 30px;
    }
  }

  .select-games__btn-generate {
    display: none;
  }

  .select-games__container-select-info {
    margin: 20px 0;
    display: flex;
    flex-direction: column;

    div {
      color: ${({ theme }) => theme.primary};
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 700;
      line-height: 1.375rem;
      letter-spacing: 0em;
      margin-bottom: 12px;
    }

    p {
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      line-height: 0.875rem;
      letter-spacing: 0em;
    }
  }

  .select-games__generate-championship {
    margin-bottom: 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .games__section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 32px;
  }

  .games__sticky {
    background: #fff;
    position: fixed;
    bottom: 0px;
    left: 0px;
    height: 86px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 410px) {
    .games__section {
      grid-template-columns: repeat(3, 1fr);
      gap: 16px 8px;
    }
  }

  @media (min-width: 576px) {
    .select-games__btn-generate {
      display: block;
    }

    .games__sticky {
      display: none;
    }

    .games__section {
      grid-template-columns: repeat(3, 1fr);
      gap: 32px;
    }
  }

  @media (min-width: 768px) {
    padding-bottom: 64px;

    .games__section {
      grid-template-columns: repeat(4, 1fr);
      margin-bottom: 64px;
    }
  }

  @media (min-width: 992px) {
    .games__section {
      grid-template-columns: repeat(6, 1fr);
    }

    .select-games__brand {
      img {
        height: auto;
      }
    }

    .select-games__container-back {
      margin-top: 50px;
      a {
        span {
          display: block;
        }
      }
    }

    .select-games__generate-championship {
      margin-bottom: 50px;
    }
    .select-games__container-select-info {
      margin: 50px 0;
    }
    .select-games__container-select-info {
      margin: 50px 0;
      display: grid;
      grid-template-columns: 170px auto;
      div {
        color: ${({ theme }) => theme.primary};
        font-size: 2.25rem;
        line-height: 2.688rem;
      }

      p {
        font-size: 1.125rem;
        line-height: 1.313rem;
        padding: 0 16px;
        justify-self: center;
        align-self: center;
      }
    }

    .select-games__counter {
      font-size: 1.25rem;
    }
  }

  @media (min-width: 1400px) {
    .games__section {
      grid-template-columns: repeat(7, 1fr);
    }

    grid-template-columns: 170px auto 170px;
  }
`;
