import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import RecipeCard from './components/RecipeCard';


// Checking if the header text exists
test('Checks if the header exists', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Here are our suggestions for today!/i);
  expect(linkElement).toBeInTheDocument();
});


// Checking if RecipeCard has content
//test('Checks if the header exists', () => {
//  const { getMatchedCSSRules } = render(<RecipeCard />);
//  const linkElement2 = getMatchedCSSRules(".recipe-name");
//  expect(linkElement2).toBeInTheDocument();
//});