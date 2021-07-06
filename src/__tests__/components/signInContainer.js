import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';

import { SignInContainer, validationSchema, initialValues } from '../../components/SignIn';
import { expect } from '@jest/globals';

const loginCredentials = {
    username: "kalle",
    password: "password"
};

describe('Testing SignIn', () => {
    describe('SignInContainer', () => {
        it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
            const mockSubmit = jest.fn();
            const { getByPlaceholderText, getByTestId } = render(<SignInContainer onSubmit={mockSubmit} validationSchema={validationSchema} initialValues={initialValues} />);

            const usernameField = getByPlaceholderText("Username");
            const passwordField = getByPlaceholderText("Password");
            const submitButton = getByTestId('signin-button');

            fireEvent.changeText(usernameField, loginCredentials.username);
            fireEvent.changeText(passwordField, loginCredentials.password);
            fireEvent.press(submitButton);

            await waitFor(() => {
                expect(mockSubmit).toHaveBeenCalledTimes(1);
                expect(mockSubmit.mock.calls[0][0].username).toMatch(loginCredentials.username);
                expect(mockSubmit.mock.calls[0][0].password).toMatch(loginCredentials.password);
            });

        });
    });

});