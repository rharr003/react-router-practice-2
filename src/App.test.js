import { render, screen } from '@testing-library/react';
import App from './App';
import Food from './Food';
import Error from './Error';
import {MemoryRouter} from 'react-router-dom'

test('renders food without crashing', () => {
  render(<MemoryRouter initialEntries={['/food/cheese']}><Food /></MemoryRouter>);
})

test('renders error without crashing', () => {  
  render(<MemoryRouter initialEntries={['/car/cheese']}><Error /></MemoryRouter>);
})

