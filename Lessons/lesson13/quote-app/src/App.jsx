
import React from 'react';
import './App.css'; // Plain CSS
import styles from './App.module.css'; // CSS Modules
import styled from 'styled-components'; // Styled Components

// Styled Components
const StyledQuoteBox = styled.div`
  background-color: #f0f8ff;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  max-width: 400px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const StyledQuoteText = styled.p`
  font-size: 18px;
  font-style: italic;
  color: #333;
  margin-bottom: 10px;
`;

const StyledQuoteAuthor = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #555;
`;

// Plain CSS Component
function PlainCSSBox() {
  return (
    <div className="quote-box">
      <p className="quote-text">
        "The only limit to our realization of tomorrow is our doubts of today."
      </p>
      <p className="quote-author">- Franklin D. Roosevelt</p>
    </div>
  );
}

// CSS Modules Component
function CSSModulesBox() {
  return (
    <div className={styles.quoteBox}>
      <p className={styles.quoteText}>
        "The only limit to our realization of tomorrow is our doubts of today."
      </p>
      <p className={styles.quoteAuthor}>- Franklin D. Roosevelt</p>
    </div>
  );
}

// Styled Components Component
function StyledComponentsBox() {
  return (
    <StyledQuoteBox>
      <StyledQuoteText>
        "The only limit to our realization of tomorrow is our doubts of today."
      </StyledQuoteText>
      <StyledQuoteAuthor>- Franklin D. Roosevelt</StyledQuoteAuthor>
    </StyledQuoteBox>
  );
}

function App() {
  return (
    <>
      <h2>Plain CSS</h2>
      <PlainCSSBox />
      <h2>CSS Modules</h2>
      <CSSModulesBox />
      <h2>Styled Components</h2>
      <StyledComponentsBox />
    </>
  );
}

export default App;
