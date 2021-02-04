import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
//   console.log(linkElement.HTMLAnchorElement);
// });

const Button = ({label}) => {

  const onClick = () => {
    console.log('clicked!')
  }

  return (
    <button
      data-testid="mybtn"
      aria-label="mybtn"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

test('testing by txt: button "click"', () => {
  const { getByText } = render(<Button label="click" />)
  const btnEl = screen.getByText('click')
  expect(btnEl).toBeInTheDocument()
})

test('testing by data-testid: button "click"', () => {
  const { getByTestId } = render(<Button label="click" />)
  const btnEl = screen.getByTestId('mybtn')
  expect(btnEl).toHaveTextContent('click')
})

test('testing by aria-label: button "click"', () => {
  const { getByLabelText } = render(<Button label="click" />)
  const btnEl = screen.getByLabelText('mybtn')
  expect(btnEl).toHaveTextContent('click')
})

test('clique do btn', () => {
  const { getByLabelText } = render(<Button label="click" />)
  const btnEl = screen.getByLabelText('mybtn')
  const onClick = jest.fn()
  fireEvent.click(btnEl)
  expect(onClick).toHaveBeenCalled()
})
