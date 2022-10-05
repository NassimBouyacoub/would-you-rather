import { findByTestId, fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from '../Components/Login'
import React from 'react'
import { Provider } from "react-redux";
import { store } from '../index'
import { MemoryRouter } from "react-router-dom";
import { toBeInTheDocument } from '@testing-library/jest-dom'
import { act } from "react-dom/test-utils";
import { cleanup } from '@testing-library/react'

describe("testing login component", () => {
    it("snapshot", () => {
        render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        )
        expect(screen).toMatchSnapshot()
    })
   })