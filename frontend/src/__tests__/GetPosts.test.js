import React from 'react';
import ReactDOM from 'react-dom';
import GetPosts from '../components/GetPosts';
import axiosMock from 'axios';
import {act, render, fireEvent, cleanup, waitForElement, waitFor} from '@testing-library/react';

// Here I test and mock API to get all post
// clean up after each test
afterEach(cleanup);

// TODO:  Error: Uncaught [TypeError: Cannot read properties of undefined (reading 'then')]
it('Get Post works', async () => {
    axiosMock.get.mockResolvedValue({data: { title: 'Hello world!' }});

    const { getByText, getByTestId, rerender } = render(<GetPosts />);

    expect(getByText(/Loading Review.../i).textContent).toBe('Loading Review...')

    const resolvedEl = await waitFor(() => getByTestId('title'));

    expect((resolvedEl).textContent).toBe('Hello world!')

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);

})
