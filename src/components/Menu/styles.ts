import styled from 'styled-components';

export const Container = styled.div`
  .mobile-nav {
    background: transparent;
    border: 0;
    float: right;
    margin: 10px;
    width: 40px;
    height: 40px;
    position: relative;
    cursor: pointer;
    -webkit-transition: 0.6s;
    transition: 0.6s;
    z-index: 9999;
  }

  .mobile-nav span {
    top: 17px;
    transition: 500ms ease-in;
  }

  .mobile-nav span,
  .mobile-nav span:after,
  .mobile-nav span:before {
    width: 35px;
    height: 3px;
    background-color: ${({ theme }) => theme.text};
    position: absolute;
    right: 0;
  }

  .mobile-nav span:before {
    content: ' ';
    width: 38px;
    right: 0;
    -webkit-transform: translateY(-10px);
    -moz-transform: translateY(-10px);
    transform: translateY(-10px);
    -webkit-transition: 0.6s;
    transition: 0.6s;
  }

  .mobile-nav span:after {
    content: ' ';
    width: 32px;
    right: 0;
    -webkit-transform: translateY(10px);
    -moz-transform: translateY(10px);
    transform: translateY(10px);
    -webkit-transition: 0.6s;
    transition: 0.6s;
  }

  .mobile-nav span.open {
    width: 0px;
    transition: 0.2s ease-out;
  }

  .mobile-nav span.open:before {
    width: 35px;
    transform: rotate(45deg) translate(0px);
    -webkit-transform: rotate(45deg) translate(0px);
  }

  .mobile-nav span.open:after {
    width: 35px;
    transform: rotate(-45deg) translate(0px);
    -webkit-transform: rotate(-45deg) translate(0px);
  }

  .mobile {
    background-color: #4d73bf;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
    height: 0;
    transition: all 0.5s ease-in;
    pointer-events: none;
  }

  .navopen {
    opacity: 1;
    height: 100%;
    pointer-events: auto;
  }

  .centeredmenu {
    height: 100%;
    display: flexbox;
    display: box;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    -webkit-align-items: center;
    -moz-align-items: center;
    -ms-align-items: center;
    align-items: center;
  }

  .menu {
    align-self: center;
  }

  .menu a {
    color: #fff;
    font-weight: 900;
    font-size: 4em;
    text-decoration: none;
    position: relative;
    display: block;
    text-align: center;
  }

  .menu a:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    bottom: 4px;
    left: 0;
    background-color: #fff;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  .menu a:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  .menu i {
    text-align: center;
    color: #fff;
    font-size: 2em;
    margin: 0 auto;
    padding: 20px 10px;
  }

  .social {
    display: flex;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
