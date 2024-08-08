import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  position: relative;
  overflow-x: hidden;
  background: ${({ theme }) => theme.primary};

  .home__content {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-end;
  }

  .home__container-btn {
    display: flex;
    justify-content: center;
    margin-bottom: 100px;
  }

  .home__brand {
    height: 38px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1,
  p,
  span {
    color: ${({ theme }) => theme.text};
  }

  span {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0em;
    font-size: 1.125rem;
    line-height: 1.313rem;
    margin-bottom: 12px;
  }

  p {
    font-size: 1.125rem;
    line-height: 1.375rem;
    margin-top: 16px;
    margin-bottom: 40px;
  }

  .home__container-elements {
    min-height: 282px;
  }

  .home__container-controller {
    position: absolute;
    width: 401px;
    height: 401px;
    background: #4d73bf;
    border-radius: 50%;
    top: -15%;
    right: -26%;
  }

  .home__controller-animation {
    height: 46%;
    position: relative;
    top: 38%;
    left: 14%;
    width: 59%;
  }

  .home__scratchs-animation-1 {
    position: absolute;
    top: 33%;
    left: 14%;
    width: 7%;
  }

  .home__scratchs-animation-2 {
    position: absolute;
    top: 71%;
    left: 46%;
    width: 7%;
  }

  .home__circle-animation {
    position: absolute;
    top: 24%;
    left: 23%;
    width: 31%;
  }

  .home__triangle-animation {
    position: absolute;
    top: 59%;
    left: 26%;
    width: 14%;
  }

  .home__ring-animation {
    position: absolute;
    top: 50%;
    left: 10%;
    width: 19%;
  }

  .floating-animation-1 {
    width: 100%;
    height: 100%;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-name: floating-1;
  }

  .floating-animation-2 {
    width: 100%;
    height: 100%;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-name: floating-2;
  }

  .shake-animation {
    width: 100%;
    height: 100%;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-name: shake;
  }

  @media (min-width: 576px) {
    .home__container-elements {
      min-height: 401px;
    }

    .home__container-controller {
      position: absolute;
      width: 542px;
      height: 542px;
      background: #4d73bf;
      border-radius: 50%;
      top: -15%;
      right: -12%;
    }

    .home__controller-animation {
      height: 58%;
      position: relative;
      top: 24%;
      left: 8%;
      width: 69%;
    }

    .home__scratchs-animation-1 {
      position: absolute;
      top: 33%;
      left: 14%;
      width: 7%;
    }

    .home__scratchs-animation-2 {
      position: absolute;
      top: 71%;
      left: 46%;
      width: 7%;
    }

    .home__circle-animation {
      position: absolute;
      top: 24%;
      left: 23%;
      width: 31%;
    }

    .home__triangle-animation {
      position: absolute;
      top: 59%;
      left: 26%;
      width: 14%;
    }

    .home__ring-animation {
      position: absolute;
      top: 50%;
      left: 10%;
      width: 19%;
    }
  }

  @media (min-width: 768px) {
    .home__brand {
      height: auto;
    }

    .home__container-btn {
      justify-content: flex-start;
    }

    .home__container-controller {
      position: absolute;
      width: 648px;
      height: 648px;
      background: #4d73bf;
      border-radius: 50%;
      top: -19%;
      right: -22%;
    }

    .home__controller-animation {
      height: 49%;
      position: relative;
      top: 31%;
      left: 10%;
      width: 57%;
    }
  }

  @media (min-width: 992px) {
    .home__content {
      flex-direction: row;
      justify-content: flex-start;
    }

    section {
      max-width: 505px;
    }

    .home__container-controller {
      position: absolute;
      width: 768px;
      height: 768px;
      background: #4d73bf;
      border-radius: 50%;
      top: -19%;
      right: -30%;
    }

    .home__controller-animation {
      height: 358px;
      position: relative;
      top: 36%;
      left: 15%;
      width: 46%;
    }
  }

  @media (min-width: 1200px) {
    .home__container-controller {
      position: absolute;
      width: 962px;
      height: 962px;
      background: #4d73bf;
      border-radius: 50%;
      top: -28%;
      right: -24%;
    }

    .home__controller-animation {
      height: 358px;
      position: relative;
      top: 36%;
      left: 15%;
      width: 46%;
    }
  }

  @media (min-width: 1400px) {
    .home__container-controller {
      position: relative;
      width: 992px;
      height: 992px;
      border-radius: 50%;
      top: -28%;
      right: -24%;
    }

    .home__controller-animation {
      height: 48%;
      position: relative;
      top: 33%;
      left: 15%;
      width: 56%;
    }

    .home__container-elements {
      display: flex;
      align-items: center;
    }
  }

  @keyframes floating-1 {
    from {
      transform: translate(0, 8px) scale(1, 1.1);
    }
    65% {
      transform: translate(0, 0px) scale(1.1, 1);
    }
    to {
      transform: translate(0, 8px) scale(1, 1.1);
    }
  }

  @keyframes floating-2 {
    from {
      transform: translate(0, 0px) rotate(-45deg);
    }
    65% {
      transform: translate(0, 8px) rotate(-55deg);
    }
    to {
      transform: translate(0, -0px) rotate(-45deg);
    }
  }

  @keyframes shake {
    from {
      transform: translate(0, 0) rotate(0);
    }
    20% {
      transform: translate(-10px, 0) rotate(-5deg);
    }
    30% {
      transform: translate(10px, 0) rotate(5deg);
    }
    50% {
      transform: translate(-10px, 0) rotate(-2.5deg);
    }
    60% {
      transform: translate(10px, 0) rotate(2.5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0);
    }
  }
`;
