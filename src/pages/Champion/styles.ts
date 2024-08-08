import styled from 'styled-components';

export const Container = styled.main`
  background: ${({ theme }) => theme.primary};

  .champion__container-back {
    margin-top: 26px;
    display: grid;
    grid-template-columns: 40px auto 40px;

    a {
      color: ${({ theme }) => theme.text};
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

  .champion__title {
    color: ${({ theme }) => theme.text};
    justify-self: center;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.313rem;
    letter-spacing: 0em;
  }

  .champion__container-cards {
    padding-left: 42px;
    margin: 54px 0 48px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    min-width: 351px;
  }

  .champion__card-champion {
    width: 245px;
    margin-right: 32px;
  }

  .champion__card-vice-champion {
    width: 215px;
  }

  .champion__redo-championship {
    display: flex;
    justify-content: center;
    margin-bottom: 90px;
  }

  .champion__container-overflow {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden;
  }

  @media (min-width: 576px) {
    .champion__container-cards {
      min-width: 510px;
      margin: 80px 0;
    }

    .champion__container-overflow {
      justify-content: center;
    }
  }

  @media (min-width: 768px) {
    .champion__card-champion {
      margin-right: 82px;
    }

    .champion__title {
      font-size: 3rem;
      line-height: 3.563rem;
    }

    .champion__container-back {
      margin-top: 50px;
      grid-template-columns: 160px auto 160px;
      a {
        span {
          display: block;
        }
      }
    }
  }
`;
