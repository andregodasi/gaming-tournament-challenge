import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { Container } from './styles';

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <button type='button' className='mobile-nav' onClick={handleToggle}>
        <span className={`${isOpen ? 'open' : ''} `} />
      </button>

      <div className={`mobile ${isOpen ? 'navopen' : ''} `}>
        <div className='centeredmenu'>
          <div className='menu'>
            <Link to='/' onClick={handleToggle}>
              Sobre
            </Link>
            <Link to='/' onClick={handleToggle}>
              Contato
            </Link>

            <div className='social'>
              <Link to='/' onClick={handleToggle}>
                <FaTwitter color='var(--white-color)' size={32} />
              </Link>
              <Link to='/' onClick={handleToggle}>
                <FaFacebook color='var(--white-color)' size={32} />
              </Link>
              <Link to='/' onClick={handleToggle}>
                <FaInstagram color='var(--white-color)' size={32} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Menu;
