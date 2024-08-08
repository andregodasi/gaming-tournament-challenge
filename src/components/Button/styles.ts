import styled from 'styled-components';

export const Container = styled.button`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.063rem;
  letter-spacing: 0px;
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.secondary};
  color: var(--black-blue);
  border-radius: 16px;
  border: 0;
  transition: 0.2s;

  &:hover {
    box-shadow: 0px 4px 18px 0px #4444441a;
    background-color: #33be99;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #c6c6c6;
    opacity: 0.7;
  }
`;
