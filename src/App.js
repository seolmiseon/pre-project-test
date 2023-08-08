/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/aria-props */
import React from 'react';
import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './counterSlice.js';
import './App.css';
// eslint-disable-next-line import/no-named-as-default
import styled from 'styled-components';

const ChangeValueButton = styled.button`
  display: inline-flex;
  direction: row;
  justify-content: center;
  align-items: center;
  background-color: #61dafb;
  font-size: 38px;
  border: 0;
  border-radius: 50px;
  padding-left: 12px;
  padding-right: 12px;
  cursor: pointer;
  width: 4rem;
  height: 4rem;
  margin: 1rem;
`;

const ButtonWrapper = styled.div`
  margin: 1rem;
`;
function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <span className="{styled.span}">{count}</span>
        <ButtonWrapper>
          <ChangeValueButton>
            <button
              aria-lavel="Increment value"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
            <button
              aria-lavel="Decrement value"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
          </ChangeValueButton>
        </ButtonWrapper>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
