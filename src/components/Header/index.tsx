import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Logo from '../../assets/png/logo.png';

import { Container } from './styles';
import Menu from '../Menu';

const Header: React.FC = () => {
  return (
    <Container>
      <div className='container-without-right-margin header__content'>
        <div className='header__links'>
          <Link to='/' className='header__logo'>
            <picture>
              <img src={Logo} alt='Lambda3' />
            </picture>
          </Link>
          <Link className='header__about' to='/'>
            Sobre
          </Link>
          <Link className='header__contact' to='/'>
            Contato
          </Link>
        </div>
        <div className='header__social-networks'>
          <Link to='/'>
            <FaTwitter color='var(--white-color)' size={32} />
          </Link>
          <Link to='/'>
            <FaFacebook color='var(--white-color)' size={32} />
          </Link>
          <Link to='/'>
            <FaInstagram color='var(--white-color)' size={32} />
          </Link>
        </div>
        <Menu />
      </div>
    </Container>
  );
};

export default Header;
