import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;

    h1 {
      color: #fff;
      font-size: 32px;
      font-weight: bold;
    }

    button {
      height: 44px;
      background: #f94d6a;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      padding: 0 25px;
      display: flex;
      align-items: center;

      &:hover {
        background: ${darken(0.08, '#F94D6A')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }

  ul {
    margin-top: 50px;
    display: grid;
    grid-gap: 10px;
  }
`;

export const Meetup = styled.li`
  display: flex;
  justify-content: space-between;
  height: 62px;
  align-items: center;
  padding: 20px 30px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;

  strong {
    font-size: 18px;
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;
  }

  span {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
  }

  svg {
    margin-left: 30px;
  }
`;

export const PageControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 30px;

  button {
    height: 44px;
    background: none;
    font-weight: bold;
    color: #f94d6a;
    border: 1px solid #f94d6a;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;
    padding: 0 25px;

    display: flex;
    align-items: center;

    &:hover {
      background: ${darken(0.08, '#F94D6A')};
      color: #fff;
    }

    &[disabled] {
      background: none;
      color: #ccc;
      border: 1px solid #ccc;
      cursor: auto;
    }
  }

  span {
    font-size: 1.5rem;
    color: #fff;
  }
`;
