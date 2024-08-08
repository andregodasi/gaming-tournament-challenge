import styled from 'styled-components';

export const Container = styled.header`
  height: 90px;
  width: 100%;
  background: ${({ theme }) => theme.primary};
  box-shadow: 0px 4px 56px ${({ theme }) => theme.shadow};
  z-index: 1;

  .header__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .header__links {
    display: flex;
    align-items: center;
  }

  .header__about,
  .header__contact {
    display: none;
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  .header__about {
    margin-right: 50px;
  }

  .header__social-networks {
    display: none;
    align-items: center;
    margin-right: 18px;
    a {
      margin-right: 32px;
    }
  }

  @media (min-width: 768px) {
    .header__about,
    .header__contact {
      display: flex;
    }

    .header__logo {
      margin-right: 80px;
    }

    .header__social-networks {
      display: flex;
    }
  }
`;
