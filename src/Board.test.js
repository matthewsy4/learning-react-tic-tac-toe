import { render, fireEvent } from '@testing-library/react';
import Board from './Board';

test('The Board should get re-rendered on each click, ' + 
'with Xs and Os appearing on alternating clicks.', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>);
    const squares = board.queryAllByRole('button');

    fireEvent.click(squares[0]);
    expect(squares[0].innerHTML).toBe('X')
    fireEvent.click(squares[1]);
    expect(squares[1].innerHTML).toBe('O')
    fireEvent.click(squares[2]);
    expect(squares[2].innerHTML).toBe('X')
    fireEvent.click(squares[3]);
    expect(squares[3].innerHTML).toBe('O')
});

test('The status message that says "Next player: __" should alternate ' +
'between saying "Next player: X" and "Next player: O", depending on whose turn it is.', () => {
    const board = render(<Board initialSquares={Array(9).fill(null)}/>);
    const squares = board.queryAllByRole('button');

    fireEvent.click(squares[0]);
    expect(board.queryByText('Next player: O')).not.toBe(null)
    fireEvent.click(squares[1]);
    expect(board.queryByText('Next player: X')).not.toBe(null)
    fireEvent.click(squares[2]);
    expect(board.queryByText('Next player: O')).not.toBe(null)
});